# ⚡ Express.js Backend Tasks & Hands-On Labs

Welcome to the **Express.js Backend Tasks** directory within the **AI-FullStack** repository. This folder contains 7 hands-on practice labs and daily tasks focused on building robust, type-safe RESTful web services using **Express 5**, **Node.js (ES Modules)**, **TypeScript**, **MongoDB (Mongoose ODM)**, **Zod Schema Validation**, and **JWT Authentication with Bcrypt**.

---

## 📂 Architecture & Folder Structure

```text
Tasks/Backend/Express/
├── 📁 Day1/                 # Express 5 + TypeScript setup, Zod schema validation & User routes
├── 📁 Day2/                 # Modular Express Routers & Student management controllers
├── 📁 Day3/                 # Database configuration layer & Mongoose MongoDB connection
├── 📁 Day4/                 # Full RESTful CRUD operations (GET, POST, PUT, DELETE) with Mongoose
├── 📁 Day5/                 # Mongoose models, controller actions & Bcrypt password hashing
├── 📁 Day6/                 # Decoupled Client-Server architecture & payload schema validation
└── 📁 Day7/                 # Full JWT Authentication API (Register, Login, JWT tokens & Bcrypt)
```

---

## ⚡ Tech Stack & Core Libraries

| Technology | Purpose |
| :--- | :--- |
| **Node.js (ESM)** | Modern JavaScript runtime using native ES Modules (`"type": "module"`) |
| **Express.js (v5.2)** | High-performance, flexible Web Framework for Node.js |
| **TypeScript (v7)** | Strongly-typed JavaScript development with `tsx watch` hot reloading |
| **MongoDB & Mongoose (v9)** | NoSQL Database & Object Data Modeling (ODM) library |
| **Zod Schema Validation** | Runtime TypeScript-first payload & data validation |
| **Bcrypt (`bcrypt`)** | Password hashing algorithm for securely storing user credentials |
| **JSON Web Token (`jsonwebtoken`)** | Token-based stateless authentication & authorization |
| **Dotenv & CORS** | Environment variable management & Cross-Origin Resource Sharing |

---

## 📅 Daily Tasks & Learning Objectives

### 🟢 Day 1: Express 5, TypeScript & Zod Validation Setup
- **Focus**: Initializing Express 5 with TypeScript in ES Module mode.
- **Key Concepts**: Application instantiation, `express.json()` and `cors()` middleware, Zod payload schema validation, route separation (`createUserRoute`, `getUserRoute`).
- **Target API**: `http://localhost:5001/api/user`

### 🟢 Day 2: Modular Routers & Controller Patterns
- **Focus**: Structuring scalable Express router modules.
- **Key Concepts**: Express router separation (`welcomeRouter`, `studentRouter`), controller actions for handling student requests, environment variable configuration.
- **Target API**: `http://localhost:5000/api/students`

### 🟡 Day 3: Database Layer & Mongoose Connection
- **Focus**: Connecting Express application to MongoDB Atlas / Local instances.
- **Key Concepts**: Mongoose database configuration (`config/db.ts`), process error handling, managing database connection lifecycle.

### 🟡 Day 4: Full RESTful CRUD Operations with Mongoose
- **Focus**: Building complete REST API CRUD handlers.
- **Key Concepts**: Designing endpoints for `GET` (all & single), `POST` (create), `PUT` (update), and `DELETE` (remove).
- **Target API**: `http://localhost:5000/api/users`

### 🔵 Day 5: Password Hashing & Security Integrations
- **Focus**: Data protection and password encryption.
- **Key Concepts**: Integrating `bcrypt` for salting and hashing user passwords prior to database insertion, updating controller actions.

### 🔵 Day 6: Decoupled Full-Stack Architecture
- **Focus**: Structuring client and server separation.
- **Key Concepts**: Segregating frontend (`client/`) and backend (`server/`) concerns, standardizing response payload shapes and Zod schemas.

### 🔴 Day 7: JWT Authentication & User Login / Registration
- **Focus**: End-to-end stateless authentication system.
- **Key Concepts**: User registration with hashed passwords, credential verification during login, issuing **JSON Web Tokens (JWT)** via `jsonwebtoken`, modular auth routers (`registerRouter`, `loginRouter`).
- **Target API**: `http://localhost:5001/api/auth`

---

## 🚀 Quickstart Guide for Any Task

To run any individual task server (e.g., **Day7**):

1. **Navigate to the target day directory**:
   ```bash
   cd Tasks/Backend/Express/Day7
   ```

2. **Install project dependencies**:
   ```bash
   npm install
   ```

3. **Set up Environment Variables (`.env`)**:
   Create a `.env` file in the task root directory:
   ```env
   PORT=5001
   MONGO_URI=mongodb://localhost:27017/express_tasks
   JWT_SECRET=your_super_secret_jwt_key
   ```

4. **Start the Development Server**:
   ```bash
   npm run dev
   ```

5. **Build TypeScript for Production**:
   ```bash
   npm run build
   ```

---

[← Back to Backend Tasks Hub](../README.md)
