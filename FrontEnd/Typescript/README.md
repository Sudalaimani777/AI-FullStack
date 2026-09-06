# 📘 TypeScript Masterclass

Welcome to the **TypeScript Masterclass**, a progressive 9-chapter guide for mastering static typing, object/array interfaces, generics, type assertions, index signatures, object-oriented class design, and built-in utility types in modern TypeScript.

---

## 📂 Repository Architecture

```text
Typescript/
├── 📁 Chapter1_StartsHere/        # Environment setup, compiler configuration & tsc watch mode
├── 📁 Chapter2_BasicTypes/        # Primitive types, type inference, union types & RegExp
├── 📁 Chapter3_ArraysAndObject/   # Array types, tuples, object types, interfaces & optional keys
├── 📁 Chapter4_Functions/         # Function signatures, rest parameters, custom type guards & never type
├── 📁 Chapter5_Assertion/         # Type assertions (as), DOM element casting & unknown type
├── 📁 Chapter6_Classes/           # Access modifiers (public/private/protected), implements & getters/setters
├── 📁 Chapter7_IndexSignature/    # Dynamic index signatures, keyof operator & type-safe key lookup
├── 📁 Chapter8_Generics/          # Generic functions, interfaces, type constraints & reusable types
└── 📁 Chapter9/                   # Built-in Utility Types (Partial, Required, Readonly, Pick, Omit, Record)
```

---

## 📚 Chapter Summaries & Code References

### 🟢 Chapter 1: Compiler Setup (`Chapter1_StartsHere`)
- Initializing `tsconfig.json` using `npx tsc --init`.
- Setting `rootDir: "./src"` and `outDir: "./build/js"`.
- Running compiler watch mode with `tsc -w`.

---

### 🟢 Chapter 2: Basic Types (`Chapter2_BasicTypes`)
- **Primitive Types**: `string`, `number`, `boolean`, `any`.
- **Type Inference**: Automatic type determination by TypeScript compiler.
- **Union Types**: Allowing multiple types for a variable (`let id: string | number`).

---

### 🟢 Chapter 3: Arrays, Tuples & Interfaces (`Chapter3_ArraysAndObject`)
- **Arrays**: `string[]` or `Array<number>`.
- **Tuples**: Strict array structure with fixed length and element types:
  ```typescript
  let myTuple: [string, number, boolean] = ['John', 25, true];
  ```
- **Type vs Interface**: Defining shape contracts for objects using `interface` and `type`.

---

### 🟡 Chapter 4: Functions & Type Guards (`Chapter4_Functions`)
- **Type Signatures**: Defining function parameter and return types.
- **Rest Parameters**: `(...nums: number[]): number`.
- **The `never` Type**: Functions that throw errors or enter infinite loops.
- **Custom Type Guards**:
  ```typescript
  const isString = (value: any): value is string => typeof value === 'string';
  ```

---

### 🟡 Chapter 5: Type Assertions & DOM Casting (`Chapter5_Assertion`)
- Explicitly coercing types using `as` syntax:
  ```typescript
  // DOM element casting
  const img = document.querySelector('img') as HTMLImageElement;
  const input = document.getElementById('username') as HTMLInputElement;
  ```
- Non-null assertion operator (`!`).
- Safe type narrowing with `unknown`.

---

### 🔵 Chapter 6: Classes & Access Modifiers (`Chapter6_Classes`)
- Access Control: `public`, `private`, `protected`, and `readonly`.
- Parameter Property Shorthand:
  ```typescript
  class Coder {
      constructor(
          public name: string,
          private age: number,
          protected lang: string = 'TypeScript'
      ) {}
  }
  ```
- Class Interfaces (`implements`) and Getter/Setter methods.

---

### 🔵 Chapter 7: Index Signatures & `keyof` (`Chapter7_IndexSignature`)
- Dynamic object key indexing:
  ```typescript
  interface TransactionObj {
      [key: string]: number;
  }
  ```
- Type-safe object property access using the `keyof` operator:
  ```typescript
  const getProp = <T, K extends keyof T>(obj: T, key: K) => obj[key];
  ```

---

### 🔴 Chapter 8: Generics (`Chapter8_Generics`)
Writing reusable, type-safe abstractions using generic placeholders (`<T>`):

```typescript
// Generic Function with Constraint
interface HasId {
    id: number;
}

const processItem = <T extends HasId>(item: T): T => {
    console.log(`Processing item ID: ${item.id}`);
    return item;
};
```

---

### 🔴 Chapter 9: Built-in Utility Types (`Chapter9`)
TypeScript provides standard built-in utility types to transform existing types:

| Utility Type | Description | Example Syntax |
| :--- | :--- | :--- |
| `Partial<T>` | Makes all properties of `T` optional | `Partial<User>` |
| `Required<T>` | Makes all properties of `T` required | `Required<User>` |
| `Readonly<T>` | Makes all properties of `T` read-only | `Readonly<User>` |
| `Record<K, V>` | Maps property keys `K` to value type `V` | `Record<string, number>` |
| `Pick<T, K>` | Selects a subset of properties `K` from `T` | `Pick<User, 'id' \| 'name'>` |
| `Omit<T, K>` | Removes properties `K` from `T` | `Omit<User, 'password'>` |
| `ReturnType<T>` | Obtains the return type of a function type `T` | `ReturnType<typeof myFunc>` |

```typescript
interface User {
    id: number;
    name: string;
    email?: string;
}

// Partial update example
const updateUser = (user: User, fieldsToUpdate: Partial<User>): User => {
    return { ...user, ...fieldsToUpdate };
};
```

---

## 🛠️ Quickstart Guide

To compile any chapter's TypeScript code:

```bash
# Navigate to desired chapter folder (e.g. Chapter9)
cd Chapter9

# Run TypeScript compiler in watch mode
npx tsc -w
```

The output JavaScript files will be continuously generated in the `./build` directory.

---

*Part of the Full-Stack Engineering Workspace.*
