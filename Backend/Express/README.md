# 🚀 Express.js & Node.js Masterclass

Welcome to the **Express.js & Node.js Masterclass** repository. This directory contains a day-by-day progressive curriculum designed to master modern backend development using **Node.js**, **Express.js**, **MongoDB (Mongoose)**, **TypeScript**, and **Authentication (JWT & Bcrypt)**.

---

## 📂 Repository Architecture

```text
Express/
├── 📄 notex.txt             # TypeScript + Express setup reference & notes
├── 📁 Day1/                 # Initial Express server setup & basic middleware
├── 📁 Day2/                 # Server structure & configuration fundamentals
├── 📁 Day3/                 # Express Router & controller setup (Auth routes)
├── 📁 Day4/                 # Multi-route API architecture & user endpoints
├── 📁 Day5/                 # MongoDB database connection using Mongoose
├── 📁 Day6/                 # Data modeling & RESTful CRUD operations (Student model)
├── 📁 Day7/                 # Secure password hashing with Bcrypt
├── 📁 Day8/                 # Full-stack integration (Backend + Frontend decoupling)
├── 📁 Day9/                 # End-to-end client-server API communication
└── 📁 Day10/                # JWT Authentication, schema validation & protected routes
```

---

## 🛠️ Tech Stack & Key Tools

- **Runtime**: Node.js (ES Modules `"type": "module"`)
- **Framework**: Express.js (v5.x)
- **Database / ORM**: MongoDB + Mongoose
- **Authentication**: JSON Web Tokens (`jsonwebtoken`) & `bcrypt`
- **TypeScript**: `typescript`, `tsx` (Watcher), `@types/express`, `@types/node`
- **Validation & Utility**: Zod, CORS, Dotenv

---

## 📅 Curriculum & Daily Breakdowns

### 🟢 Day 1: Basic Express Server Setup
- Initializing Express app (`express()`).
- Middleware setup: `cors()` and `express.json()`.
- Environment variable configuration with `dotenv`.
- Starting the HTTP server on custom port bindings.

### 🟢 Day 2: Configuration & Fundamentals
- Structuring environment variables (`.env`).
- Best practices for project organization and standard server lifecycle.

### 🟢 Day 3: Express Router & Controllers
- Introduction to `express.Router()`.
- Separating routes (`authRoutes.js`) and controllers.
- Mounting router instances on API endpoints (`app.use("/api/auth", routes)`).

### 🟢 Day 4: Advanced Routing & Multiple Endpoints
- Combining multiple route files (`authRoutes`, `getUserRoutes`).
- Designing clean API URL hierarchies.

### 🟢 Day 5: MongoDB Connection with Mongoose
- Connecting to MongoDB URI via `mongoose.connect()`.
- Managing connection errors and process graceful shutdowns (`process.exit(1)`).
- Decoupling database configuration inside `config/db.js`.

### 🟡 Day 6: Schemas, Data Modeling & CRUD
- Defining Mongoose Schemas (`student.model.js`).
- Implementing standard RESTful CRUD operations:
  - `POST` - Create document
  - `GET` - Fetch document(s)
  - `PUT` / `PATCH` - Update document
  - `DELETE` - Remove document

### 🟡 Day 7: Password Hashing & Security
- Secure user registration flow.
- Salting and hashing sensitive passwords using `bcrypt`.
- Preventing plain-text password leakage.

### 🔵 Day 8 & Day 9: Full-Stack Integration (Client + Server)
- Decoupling `backend` (Express) and `frontend` (React/Vite).
- Configuring Cross-Origin Resource Sharing (CORS) for full-stack communication.
- Establishing end-to-end data flow between Client and Server endpoints.

### 🔴 Day 10: JWT Authentication & User Authorization
- Generating and verifying **JSON Web Tokens (JWT)** via `jsonwebtoken`.
- Defining User validation schemas (`user.schema.js`).
- Protecting private API routes with authentication middleware.

---

## 🛠️ TypeScript + Express Production Setup Guide

Below is the standard setup configuration used for modern TypeScript + Express projects in ES Module mode (from `notex.txt`):

### 1. Project Initialization & Dependencies
```bash
# Create directory and initialize project
mkdir my-backend && cd my-backend
npm init -y

# Install production dependencies
npm install express dotenv cors zod

# Install development dependencies
npm install -D typescript tsx @types/node @types/express @types/cors @types/bcrypt
```

### 2. Configure `package.json`
```json
{
  "name": "my-backend",
  "version": "1.0.0",
  "type": "module",
  "main": "dist/server.js",
  "scripts": {
    "dev": "tsx watch src/server.ts",
    "build": "tsc",
    "start": "node dist/server.js"
  }
}
```

### 3. Configure `tsconfig.json`
```json
{
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist",
    "module": "nodenext",
    "moduleResolution": "nodenext",
    "target": "esnext",
    "types": ["node"],
    "sourceMap": true,
    "strict": true,
    "verbatimModuleSyntax": true,
    "isolatedModules": true,
    "skipLibCheck": true
  },
  "include": ["src"]
}
```

---

## 🚀 Running Any Day's Server

To run any specific day's project:

```bash
# Navigate to the target day directory (e.g. Day6)
cd Day6

# Install dependencies
npm install

# Run in development mode
npm run dev
```

---

*Part of the full-stack backend learning path.*
