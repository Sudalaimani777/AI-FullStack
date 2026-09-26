# Design Spec: Bulk Product Import Pipeline & Dynamic Related Products

**Date:** 2026-09-26  
**Status:** Approved  
**Module:** UrbanCart Server (`server`)  

---

## 1. Problem Statement & Motivation
Managing large-scale e-commerce inventories is impossible when administrators are forced to create products individually via manual form inputs. Furthermore, manually associating "related products" for thousands of inventory items represents an unsustainable $O(N \times K)$ operational burden.

This system provides:
1. A streaming bulk CSV upload pipeline allowing administrators to ingest thousands of products in seconds with row-level validation and error reporting.
2. A ready-to-use CSV template download endpoint for admin convenience.
3. An automated related-products engine that dynamically serves similar products based on category matching and price proximity.

---

## 2. System Architecture & Components

### 2.1 Dependencies
* `multer` & `@types/multer`: Multi-part form data parser for file uploads in memory.
* `csv-parser`: Fast, event-driven streaming CSV parser for Node.js.
* Existing stack: `express`, `mongoose`, `zod`.

### 2.2 Ingestion Flow
```
[Admin CSV Upload (POST /api/products/bulk-upload)]
                 │
                 ▼
       [multer memoryStorage] ──> Readable Stream Buffer
                                          │
                                          ▼
                                   [csv-parser]
                                          │
                                          ▼
                               [Zod Row Validation]
                              ├── Valid   ──> [Batch Buffer (size: 500)]
                              └── Invalid ──> [Error Collection { row, error }]
                                                       │
                                                       ▼ (when batch = 500 or EOF)
                                             Product_Model.insertMany(batch, { ordered: false })
                                                       │
                                                       ▼
                                            [JSON Summary Response]
```

---

## 3. Data Formats & Schemas

### 3.1 CSV Header Contract
```csv
product_name,product_description,product_category,product_image,product_price,product_stock
```

### 3.2 Zod Validation Schema (`bulkProductRowSchema`)
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
    (val) => !isNaN(parseInt(val, 10)) && parseInt(val, 10) >= 0,
    "Product stock must be a non-negative integer"
  )
});
```

---

## 4. API Endpoints

### 4.1 `POST /api/products/bulk-upload`
* **Access:** Admin only (`protectMiddleWare`, `adminMiddleware`)
* **Content-Type:** `multipart/form-data` (file field: `file`)
* **File Constraints:** Accepted MIME types: `text/csv`, `application/vnd.ms-excel`, `.csv` extension; max file size 15 MB.
* **Success Response (200 OK):**
```json
{
  "success": true,
  "message": "Bulk import completed",
  "data": {
    "totalRows": 2500,
    "insertedCount": 2492,
    "failedCount": 8,
    "errors": [
      {
        "row": 45,
        "product_name": "USB Cable",
        "error": "Product price must be a valid positive number"
      }
    ]
  }
}
```

### 4.2 `GET /api/products/bulk-template`
* **Access:** Admin only (`protectMiddleWare`, `adminMiddleware`)
* **Response:** Sends a downloadable `.csv` file attachment containing valid headers and 2 sample rows.

### 4.3 `GET /api/products/:id/related`
* **Access:** Public (guests & customers)
* **Query Parameters:** `limit` (optional integer, default: 6, max: 20)
* **Algorithm:**
  1. Retrieve reference product by `_id`. Return 404 if not found.
  2. Parse reference price as numeric: `referencePrice = parseFloat(product.product_price) || 0`.
  3. Execute MongoDB aggregation pipeline on `Product_Model`:
     * `$match`: `{ product_category: product.product_category, _id: { $ne: product._id } }`
     * `$addFields`: Calculate absolute price difference:
       ```json
       {
         "priceDiff": {
           "$abs": {
             "$subtract": [{ "$toDouble": "$product_price" }, referencePrice]
           }
         }
       }
       ```
     * `$sort`: `{ "priceDiff": 1 }`
     * `$limit`: `limit` (default 6)
     * `$project`: Exclude temporary `priceDiff` field before returning.
* **Success Response (200 OK):**
```json
{
  "success": true,
  "data": [
    {
      "_id": "6724...",
      "product_name": "Wireless Headphones Pro",
      "product_description": "Similar high-end audio device",
      "product_category": "Electronics",
      "product_image": "https://example.com/item.jpg",
      "product_price": "89.99",
      "product_stock": "45"
    }
  ]
}
```

---

## 5. Resilience & Edge Cases
* **Empty File / Corrupted Stream:** Multer rejects files with zero bytes or non-CSV headers with appropriate 400 Bad Request error.
* **Partial Failures:** Valid chunks are written to MongoDB using `insertMany(chunk, { ordered: false })`. MongoDB will not discard valid rows if an individual record triggers a schema validation issue.
* **Single Product Category:** If the reference product is the only product in its category, `GET /api/products/:id/related` returns an empty array `[]` cleanly rather than throwing an error.
