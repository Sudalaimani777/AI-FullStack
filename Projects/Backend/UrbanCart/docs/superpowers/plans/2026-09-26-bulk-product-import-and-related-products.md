# Bulk Product Import Pipeline & Dynamic Related Products Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Provide an admin CSV streaming ingestion pipeline to import thousands of products with row validation and error reporting, and dynamic related-products recommendation based on category matching and price proximity.

**Architecture:** Node streaming with `multer` (in-memory buffer) piped into `csv-parser`. Each parsed row is validated against Zod `bulkProductRowSchema`. Valid records are batched (500 items/chunk) and written to MongoDB via `Product_Model.insertMany(batch, { ordered: false })`. Related products are fetched dynamically using a MongoDB aggregation pipeline computing absolute price difference (`$abs`, `$toDouble`) filtered by `product_category`.

**Tech Stack:** Node.js v24, Express v5, TypeScript, Mongoose, Zod, Multer, csv-parser, native `node:test` via `tsx --test`.

**Spec:** `docs/superpowers/specs/2026-09-26-bulk-product-import-and-related-products-design.md`

## Global Constraints

* Module target: `server/`
* Ingestion must stream rows without loading the entire parsed dataset as Mongoose model objects in RAM.
* Ingestion must support partial success: valid rows are inserted, and failed rows are returned with row number and reason.
* Related products must never return the target product itself and must gracefully handle categories with fewer items than the requested limit.
* Admin endpoints must be protected by `protectMiddleWare` and `adminMiddleware`.

## Review Focus

* Uploading a CSV file with empty lines or trailing blank lines does not crash the parser or register as failed products.
* Non-numeric strings in `product_price` or `product_stock` produce descriptive validation errors without unhandled exceptions.
* Missing file in `multipart/form-data` request returns 400 Bad Request with a clear error message.
* Non-CSV files (e.g. `.png` or `.pdf`) uploaded to the endpoint are rejected by the file filter.
* Requesting related products for a non-existent product ID returns a 404 response.

---

### Task 1: Install Dependencies and Configure Test Script

**Files:**
- Modify: `server/package.json`

**Interfaces:**
- Consumes: `npm install multer csv-parser`, `npm install -D @types/multer`
- Produces: Test runner script `"test": "tsx --test \"test/**/*.test.ts\""`

- [ ] **Step 1: Install dependencies in `server`**

Run:
```bash
npm install multer csv-parser
npm install -D @types/multer
```

- [ ] **Step 2: Update `package.json` test script**

In `server/package.json`, set:
```json
"scripts": {
  "test": "tsx --test \"test/**/*.test.ts\"",
  "dev": "tsx watch src/server.ts",
  "build": "tsc",
  "start": "node dist/server.js"
}
```

- [ ] **Step 3: Verify test runner works**

Run: `npm test`  
Expected: `tests 0, pass 0, fail 0` with exit code 0.

- [ ] **Step 4: Commit**

```bash
git add server/package.json server/package-lock.json
git commit -m "chore: add multer, csv-parser and configure test runner"
```

---

### Task 2: Implement Zod Bulk Product Row Validation Schema

**Files:**
- Modify: `server/src/validators/product.validator.ts`
- Test: `server/test/product.validator.test.ts`

**Interfaces:**
- Produces: `bulkProductRowSchema: z.ZodObject<...>`
- Types: `BulkProductRow = z.infer<typeof bulkProductRowSchema>`

- [ ] **Step 1: Write the failing unit tests for row validation**

Create `server/test/product.validator.test.ts`:
```typescript
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { bulkProductRowSchema } from "../src/validators/product.validator.js";

describe("bulkProductRowSchema", () => {
  test("accepts a valid product row", () => {
    const validRow = {
      product_name: "Mechanical Keyboard",
      product_description: "RGB Mechanical Keyboard with Blue Switches",
      product_category: "Electronics",
      product_image: "https://example.com/keyboard.jpg",
      product_price: "79.99",
      product_stock: "50"
    };

    const parsed = bulkProductRowSchema.safeParse(validRow);
    assert.equal(parsed.success, true);
  });

  test("rejects row with invalid price", () => {
    const invalidRow = {
      product_name: "Keyboard",
      product_description: "Description",
      product_category: "Electronics",
      product_image: "https://example.com/k.jpg",
      product_price: "-15.00",
      product_stock: "10"
    };

    const parsed = bulkProductRowSchema.safeParse(invalidRow);
    assert.equal(parsed.success, false);
  });

  test("rejects row with negative or non-integer stock", () => {
    const invalidRow = {
      product_name: "Keyboard",
      product_description: "Description",
      product_category: "Electronics",
      product_image: "https://example.com/k.jpg",
      product_price: "25.00",
      product_stock: "-5"
    };

    const parsed = bulkProductRowSchema.safeParse(invalidRow);
    assert.equal(parsed.success, false);
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test`  
Expected: FAIL (`bulkProductRowSchema` is not defined or exported).

- [ ] **Step 3: Implement `bulkProductRowSchema`**

Modify `server/src/validators/product.validator.ts`:
```typescript
export const bulkProductRowSchema = z.object({
  product_name: z.string().trim().min(1, "Product name is required"),
  product_description: z.string().trim().min(1, "Product description is required"),
  product_category: z.string().trim().min(1, "Product category is required"),
  product_image: z.string().trim().min(1, "Product image is required"),
  product_price: z.string().trim().refine(
    (val) => !isNaN(parseFloat(val)) && parseFloat(val) >= 0,
    "Product price must be a valid positive number"
  ),
  product_stock: z.string().trim().refine(
    (val) => !isNaN(parseInt(val, 10)) && parseInt(val, 10) >= 0 && !val.includes("."),
    "Product stock must be a non-negative integer"
  )
});

export type BulkProductRow = z.infer<typeof bulkProductRowSchema>;
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test`  
Expected: PASS with 3 passing tests.

- [ ] **Step 5: Commit**

```bash
git add server/src/validators/product.validator.ts server/test/product.validator.test.ts
git commit -m "feat: add bulkProductRowSchema and validator tests"
```

---

### Task 3: Implement Multer CSV Upload Middleware

**Files:**
- Create: `server/src/middlewares/upload.middleware.ts`
- Test: `server/test/upload.middleware.test.ts`

**Interfaces:**
- Produces: `csvUploadMiddleware: RequestHandler` (accepts single file field `"file"`, max size 15MB, filters for CSV MIME/extensions)

- [ ] **Step 1: Write the failing test for upload middleware configuration**

Create `server/test/upload.middleware.test.ts`:
```typescript
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { isCsvFile } from "../src/middlewares/upload.middleware.js";

describe("isCsvFile helper", () => {
  test("allows .csv files with text/csv mimetype", () => {
    assert.equal(isCsvFile("inventory.csv", "text/csv"), true);
  });

  test("allows .csv files with application/vnd.ms-excel mimetype", () => {
    assert.equal(isCsvFile("catalog.csv", "application/vnd.ms-excel"), true);
  });

  test("rejects .png image files", () => {
    assert.equal(isCsvFile("photo.png", "image/png"), false);
  });

  test("rejects .exe files", () => {
    assert.equal(isCsvFile("virus.exe", "application/octet-stream"), false);
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test`  
Expected: FAIL (`isCsvFile` not found).

- [ ] **Step 3: Implement `upload.middleware.ts`**

Create `server/src/middlewares/upload.middleware.ts`:
```typescript
import multer from "multer";
import type { Request } from "express";

export function isCsvFile(filename: string, mimetype: string): boolean {
  const isCsvExt = filename.toLowerCase().endsWith(".csv");
  const isCsvMime = 
    mimetype === "text/csv" || 
    mimetype === "application/vnd.ms-excel" || 
    mimetype === "text/plain" ||
    mimetype === "application/csv";
  return isCsvExt || isCsvMime;
}

const storage = multer.memoryStorage();

export const uploadCsv = multer({
  storage,
  limits: {
    fileSize: 15 * 1024 * 1024 // 15MB
  },
  fileFilter: (_req: Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
    if (isCsvFile(file.originalname, file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("Only CSV files are allowed"));
    }
  }
});
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test`  
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add server/src/middlewares/upload.middleware.ts server/test/upload.middleware.test.ts
git commit -m "feat: add multer CSV upload middleware and file filter"
```

---

### Task 4: Implement Bulk Import Service with Streaming & Batch Insertion

**Files:**
- Create: `server/src/services/bulk-product.service.ts`
- Test: `server/test/bulk-product.service.test.ts`

**Interfaces:**
- Produces: `parseAndInsertBulkProducts(buffer: Buffer): Promise<BulkImportResult>`
- Types:
  ```typescript
  export interface BulkImportResult {
    totalRows: number;
    insertedCount: number;
    failedCount: number;
    errors: Array<{ row: number; product_name?: string; error: string }>;
  }
  ```

- [ ] **Step 1: Write failing unit test for `parseAndInsertBulkProducts`**

Create `server/test/bulk-product.service.test.ts`:
```typescript
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { parseCsvBuffer } from "../src/services/bulk-product.service.js";

describe("parseCsvBuffer", () => {
  test("parses CSV buffer and separates valid from invalid rows", async () => {
    const csvContent = 
      "product_name,product_description,product_category,product_image,product_price,product_stock\n" +
      "Valid Item,Great product,Electronics,https://img.com/1.jpg,49.99,100\n" +
      "Bad Item,Missing price,Electronics,https://img.com/2.jpg,,50\n";

    const buffer = Buffer.from(csvContent, "utf-8");
    const result = await parseCsvBuffer(buffer);

    assert.equal(result.totalRows, 2);
    assert.equal(result.validRows.length, 1);
    assert.equal(result.validRows[0].product_name, "Valid Item");
    assert.equal(result.errors.length, 1);
    assert.equal(result.errors[0].row, 2);
  });

  test("handles empty rows and whitespace gracefully", async () => {
    const csvContent = 
      "product_name,product_description,product_category,product_image,product_price,product_stock\n" +
      "\n" +
      "Valid Item 2,Another item,Apparel,https://img.com/3.jpg,19.99,20\n" +
      "\n";

    const buffer = Buffer.from(csvContent, "utf-8");
    const result = await parseCsvBuffer(buffer);

    assert.equal(result.validRows.length, 1);
    assert.equal(result.validRows[0].product_name, "Valid Item 2");
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test`  
Expected: FAIL (`parseCsvBuffer` not found).

- [ ] **Step 3: Implement `bulk-product.service.ts`**

Create `server/src/services/bulk-product.service.ts`:
```typescript
import { Readable } from "node:stream";
import csvParser from "csv-parser";
import { bulkProductRowSchema, type BulkProductRow } from "../validators/product.validator.js";
import Product_Model from "../models/product.model.js";

export interface BulkImportError {
  row: number;
  product_name?: string;
  error: string;
}

export interface ParseResult {
  totalRows: number;
  validRows: BulkProductRow[];
  errors: BulkImportError[];
}

export interface BulkImportResult {
  totalRows: number;
  insertedCount: number;
  failedCount: number;
  errors: BulkImportError[];
}

export function parseCsvBuffer(buffer: Buffer): Promise<ParseResult> {
  return new Promise((resolve, reject) => {
    const validRows: BulkProductRow[] = [];
    const errors: BulkImportError[] = [];
    let rowIndex = 0;

    const stream = Readable.from(buffer).pipe(
      csvParser({
        mapHeaders: ({ header }) => header.trim(),
        skipEmptyLines: true
      })
    );

    stream.on("data", (row: Record<string, string>) => {
      rowIndex++;
      // Check if all row keys are blank or empty
      const values = Object.values(row).map((v) => (v || "").trim());
      if (values.every((v) => v === "")) {
        return; // Ignore completely blank lines
      }

      const parseResult = bulkProductRowSchema.safeParse(row);
      if (parseResult.success) {
        validRows.push(parseResult.data);
      } else {
        const errorMessages = parseResult.error.issues.map((i) => i.message).join("; ");
        errors.push({
          row: rowIndex,
          product_name: row.product_name?.trim() || "Unknown",
          error: errorMessages
        });
      }
    });

    stream.on("end", () => {
      resolve({
        totalRows: validRows.length + errors.length,
        validRows,
        errors
      });
    });

    stream.on("error", (err) => {
      reject(err);
    });
  });
}

export async function processBulkProductUpload(buffer: Buffer, batchSize = 500): Promise<BulkImportResult> {
  const { totalRows, validRows, errors } = await parseCsvBuffer(buffer);
  let insertedCount = 0;

  for (let i = 0; i < validRows.length; i += batchSize) {
    const chunk = validRows.slice(i, i + batchSize);
    try {
      const inserted = await Product_Model.insertMany(chunk, { ordered: false });
      insertedCount += inserted.length;
    } catch (err: any) {
      if (err.insertedDocs && Array.isArray(err.insertedDocs)) {
        insertedCount += err.insertedDocs.length;
      }
      errors.push({
        row: i + 1,
        error: `Database insertion error in batch: ${err.message || "Unknown error"}`
      });
    }
  }

  return {
    totalRows,
    insertedCount,
    failedCount: totalRows - insertedCount,
    errors
  };
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test`  
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add server/src/services/bulk-product.service.ts server/test/bulk-product.service.test.ts
git commit -m "feat: implement streaming CSV parser and batch product ingestion service"
```

---

### Task 5: Implement Dynamic Related Products Service with Price Proximity

**Files:**
- Create: `server/src/services/related-product.service.ts`
- Test: `server/test/related-product.service.test.ts`

**Interfaces:**
- Produces: `getRelatedProductsService(productId: string, limit?: number): Promise<Product[]>`

- [ ] **Step 1: Write test for price proximity ranking logic**

Create `server/test/related-product.service.test.ts`:
```typescript
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { buildRelatedProductsAggregation } from "../src/services/related-product.service.js";
import mongoose from "mongoose";

describe("buildRelatedProductsAggregation", () => {
  test("generates valid aggregation pipeline for category and price proximity", () => {
    const targetId = new mongoose.Types.ObjectId().toString();
    const category = "Electronics";
    const price = 99.99;
    const limit = 6;

    const pipeline = buildRelatedProductsAggregation(targetId, category, price, limit);

    assert.equal(pipeline.length, 4);
    assert.equal((pipeline[0] as any).$match.product_category, category);
    assert.equal((pipeline[3] as any).$limit, limit);
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test`  
Expected: FAIL (`buildRelatedProductsAggregation` not found).

- [ ] **Step 3: Implement `related-product.service.ts`**

Create `server/src/services/related-product.service.ts`:
```typescript
import mongoose, { type PipelineStage } from "mongoose";
import Product_Model from "../models/product.model.js";

export function buildRelatedProductsAggregation(
  targetId: string,
  category: string,
  targetPrice: number,
  limit: number
): PipelineStage[] {
  return [
    {
      $match: {
        product_category: category,
        _id: { $ne: new mongoose.Types.ObjectId(targetId) }
      }
    },
    {
      $addFields: {
        priceDiff: {
          $abs: {
            $subtract: [{ $toDouble: "$product_price" }, targetPrice]
          }
        }
      }
    },
    {
      $sort: { priceDiff: 1 }
    },
    {
      $limit: limit
    }
  ];
}

export async function getRelatedProductsService(productId: string, limit = 6) {
  if (!mongoose.Types.ObjectId.isValid(productId)) {
    throw new Error("INVALID_ID");
  }

  const currentProduct = await Product_Model.findById(productId);
  if (!currentProduct) {
    throw new Error("PRODUCT_NOT_FOUND");
  }

  const targetPrice = parseFloat(currentProduct.product_price) || 0;
  const pipeline = buildRelatedProductsAggregation(
    productId,
    currentProduct.product_category,
    targetPrice,
    limit
  );

  const related = await Product_Model.aggregate(pipeline);
  return related;
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test`  
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add server/src/services/related-product.service.ts server/test/related-product.service.test.ts
git commit -m "feat: implement dynamic related products aggregation service"
```

---

### Task 6: Implement Bulk Controllers & Template Endpoint

**Files:**
- Create: `server/src/controllers/products/bulk.controller.ts`
- Modify: `server/src/controllers/products/index.ts`
- Test: `server/test/bulk-template.test.ts`

**Interfaces:**
- Produces:
  - `bulkUploadProductsController(req, res)`
  - `downloadBulkTemplateController(req, res)`
  - `getRelatedProductsController(req, res)`

- [ ] **Step 1: Write test for CSV template generation**

Create `server/test/bulk-template.test.ts`:
```typescript
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { generateCsvTemplate } from "../src/controllers/products/bulk.controller.js";

describe("generateCsvTemplate", () => {
  test("returns valid CSV string with headers and sample rows", () => {
    const template = generateCsvTemplate();
    const lines = template.trim().split("\n");
    assert.equal(lines[0], "product_name,product_description,product_category,product_image,product_price,product_stock");
    assert.ok(lines.length >= 3);
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test`  
Expected: FAIL (`generateCsvTemplate` not found).

- [ ] **Step 3: Implement `bulk.controller.ts` and re-export in `index.ts`**

Create `server/src/controllers/products/bulk.controller.ts`:
```typescript
import type { Request, Response } from "express";
import { processBulkProductUpload } from "../../services/bulk-product.service.js";
import { getRelatedProductsService } from "../../services/related-product.service.js";

export function generateCsvTemplate(): string {
  return [
    "product_name,product_description,product_category,product_image,product_price,product_stock",
    '"Wireless Noise Cancelling Headphones","High fidelity sound with ANC","Electronics","https://images.unsplash.com/photo-1505740420928-5e560c06d30e",99.99,150',
    '"Organic Cotton T-Shirt","100% organic soft cotton regular fit","Apparel","https://images.unsplash.com/photo-1521572267360-ee0c2909d518",19.99,300'
  ].join("\n");
}

export async function bulkUploadProductsController(req: Request, res: Response): Promise<void> {
  try {
    if (!req.file || !req.file.buffer) {
      res.status(400).json({
        success: false,
        message: "No CSV file uploaded. Please upload a file with key 'file'."
      });
      return;
    }

    const result = await processBulkProductUpload(req.file.buffer);

    res.status(200).json({
      success: true,
      message: "Bulk import completed",
      data: result
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to process bulk upload",
      error: error.message
    });
  }
}

export function downloadBulkTemplateController(_req: Request, res: Response): void {
  const csvContent = generateCsvTemplate();
  res.setHeader("Content-Type", "text/csv");
  res.setHeader("Content-Disposition", 'attachment; filename="urbancart_products_template.csv"');
  res.status(200).send(csvContent);
}

export async function getRelatedProductsController(req: Request, res: Response): Promise<void> {
  try {
    const { id } = req.params;
    const limit = req.query.limit ? parseInt(req.query.limit as string, 10) : 6;

    const products = await getRelatedProductsService(id, limit);

    res.status(200).json({
      success: true,
      data: products
    });
  } catch (error: any) {
    if (error.message === "INVALID_ID") {
      res.status(400).json({ success: false, message: "Invalid product ID format" });
      return;
    }
    if (error.message === "PRODUCT_NOT_FOUND") {
      res.status(404).json({ success: false, message: "Product not found" });
      return;
    }
    res.status(500).json({
      success: false,
      message: "Failed to fetch related products",
      error: error.message
    });
  }
}
```

Modify `server/src/controllers/products/index.ts` to export the new controllers:
```typescript
export * from "./bulk.controller.js";
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test`  
Expected: PASS.

- [ ] **Step 5: Commit**

```bash
git add server/src/controllers/products/bulk.controller.ts server/src/controllers/products/index.ts server/test/bulk-template.test.ts
git commit -m "feat: implement bulk upload, template download, and related products controllers"
```

---

### Task 7: Wire Routes and End-to-End Integration Verification

**Files:**
- Modify: `server/src/routes/products/product.routes.ts`
- Test: `server/test/routes.test.ts`

**Interfaces:**
- Registers:
  - `POST /api/products/bulk-upload` (protected, admin, `uploadCsv.single("file")`, `bulkUploadProductsController`)
  - `GET /api/products/bulk-template` (protected, admin, `downloadBulkTemplateController`)
  - `GET /api/products/:id/related` (public, `getRelatedProductsController`)

- [ ] **Step 1: Write integration route test**

Create `server/test/routes.test.ts`:
```typescript
import { test, describe } from "node:test";
import assert from "node:assert/strict";
import productRouter from "../src/routes/products/product.routes.js";

describe("productRouter routes configuration", () => {
  test("registers bulk-upload, bulk-template, and related routes", () => {
    const registeredPaths = productRouter.stack.map((layer) => layer.route?.path).filter(Boolean);
    
    assert.ok(registeredPaths.includes("/products/bulk-upload"));
    assert.ok(registeredPaths.includes("/products/bulk-template"));
    assert.ok(registeredPaths.includes("/products/:id/related"));
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `npm test`  
Expected: FAIL (paths not yet in router stack).

- [ ] **Step 3: Update `product.routes.ts`**

In `server/src/routes/products/product.routes.ts`:
Import `uploadCsv`, `bulkUploadProductsController`, `downloadBulkTemplateController`, and `getRelatedProductsController`.
Add the routes before the parameter route `/products/:id` to avoid path collisions.
```typescript
// Bulk upload and template routes
productRouter.post(
  "/products/bulk-upload",
  protectMiddleWare,
  adminMiddleware,
  uploadCsv.single("file"),
  bulkUploadProductsController
);

productRouter.get(
  "/products/bulk-template",
  protectMiddleWare,
  adminMiddleware,
  downloadBulkTemplateController
);

// Dynamic related products route
productRouter.get("/products/:id/related", getRelatedProductsController);
```

- [ ] **Step 4: Run test to verify it passes**

Run: `npm test`  
Expected: PASS (all tests passing across all test files).

- [ ] **Step 5: Run TypeScript build check**

Run: `npm run build` in `server`  
Expected: Clean compilation with 0 TypeScript errors.

- [ ] **Step 6: Commit**

```bash
git add server/src/routes/products/product.routes.ts server/test/routes.test.ts
git commit -m "feat: register bulk upload, template, and related routes in product router"
```
