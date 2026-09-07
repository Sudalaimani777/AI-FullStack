# ⚙️ Backend Engineering Tasks & Practice Hub

Welcome to the **Backend Engineering Tasks Hub** within the **AI-FullStack** repository. This directory contains a structured sequence of hands-on practice labs, coding assignments, and tasks focused on mastering core **Node.js**, **Express.js**, **TypeScript**, **MongoDB (Mongoose ODM)**, **Zod Schema Validation**, and **JWT Authentication**.

---

## 📂 Repository Structure

```text
Tasks/Backend/
├── 📁 Node/                   # Core Node.js Fundamentals & Module Tasks
│   ├── 📁 Task1/              # HTTP Server, OS Metrics, Process CLI, Path Resolution
│   └── 📁 Task2/              # Async FS Promises, Automated Directory Generator & File Manager
│
└── 📁 Express/                # Express 5 & TypeScript Web Service Labs
    ├── 📁 Day1/               # Express 5 + TypeScript setup, Zod schema validation & User routes
    ├── 📁 Day2/               # Modular Express Routers & Student management controllers
    ├── 📁 Day3/               # Database configuration layer & Mongoose MongoDB connection
    ├── 📁 Day4/               # Full RESTful CRUD operations (GET, POST, PUT, DELETE) with Mongoose
    ├── 📁 Day5/               # Mongoose models, controller actions & Bcrypt password hashing
    ├── 📁 Day6/               # Decoupled Client-Server architecture & payload schema validation
    └── 📁 Day7/               # Full JWT Authentication API (Register, Login, JWT tokens & Bcrypt)
```

---

## ⚡ Modules Overview & Key Learning Objectives

### 1. 🟢 Node.js Core Fundamentals (`/Node`)
Focuses on low-level Node.js architecture, native system modules, asynchronous file processing, and system information logging.
- **Key Technologies**: Node.js (ESM), `http`, `fs/promises`, `os`, `process`, `path`, `url`, `dotenv`.
- **Core Topics**:
  - Building lightweight native HTTP servers.
  - Querying system metrics (CPU cores, RAM usage, architecture).
  - Inspecting process parameters and environment variables.
  - Absolute vs Relative path resolution (`path.resolve`, `path.join`).
  - Asynchronous file operations (writing, reading, renaming, copying, deleting).
  - Automated project folder hierarchy generation.

### 2. ⚡ Express.js & TypeScript REST Services (`/Express`)
Focuses on building production-grade, type-safe backend REST APIs and secure authentication services.
- **Key Technologies**: Express.js (v5.2), TypeScript (v7), MongoDB & Mongoose (v9), Zod Schema Validation, Bcrypt, JSON Web Tokens (`jsonwebtoken`).
- **Core Topics**:
  - Express 5 application setup with TypeScript and `tsx watch` hot-reloading.
  - Modular routing (`express.Router()`) and controller action separation.
  - Runtime request payload validation using Zod schemas.
  - Database persistence with MongoDB Atlas and Mongoose models.
  - Full RESTful CRUD operations (Create, Read, Update, Delete).
  - Password salting and hashing using `bcrypt`.
  - Stateless user authentication & authorization with JWT tokens (`jsonwebtoken`).

---

## 🛠️ Summary Matrix of Tasks

| Module / Lab | Topic & Focus Area | Tech Stack | Primary Features |
| :--- | :--- | :--- | :--- |
| [`Node/Task1`](./Node/README.md#task-1) | Core Node Modules & HTTP Server | Node.js, `http`, `os`, `process`, `path` | Native HTTP server, OS memory/CPU stats, path resolution |
| [`Node/Task2`](./Node/README.md#task-2) | Async FS Promises & Folder Generator | Node.js, `fs/promises`, `dotenv` | Async file CRUD, automated directory tree generator |
| [`Express/Day1`](./Express/README.md#day-1) | Express 5 + TS Setup & Zod Validation | Express 5, TypeScript, Zod | Type-safe Express server, Zod request payload validation |
| [`Express/Day2`](./Express/README.md#day-2) | Modular Routers & Controllers | Express 5, TypeScript | Express router decoupling, student management controllers |
| [`Express/Day3`](./Express/README.md#day-3) | Mongoose Database Layer | Express 5, Mongoose, MongoDB | Database connection layer, environment URI parsing |
| [`Express/Day4`](./Express/README.md#day-4) | Full RESTful CRUD Operations | Express 5, TypeScript, Mongoose | Complete User document CRUD endpoints (GET, POST, PUT, DELETE) |
| [`Express/Day5`](./Express/README.md#day-5) | Bcrypt Password Hashing | Express 5, Mongoose, Bcrypt | Password encryption pre-save hooks, secure user storage |
| [`Express/Day6`](./Express/README.md#day-6) | Decoupled Client-Server Layout | Express 5, Client/Server | Architecture separation, payload response standardization |
| [`Express/Day7`](./Express/README.md#day-7) | Full JWT Authentication API | Express 5, JWT, Bcrypt, Mongoose | User register & login endpoints, JWT token issuance |

---

## 🚀 Quickstart Execution Guide

To execute any backend task script or server:

### For Node.js Core Tasks:
```bash
# Navigate to the target task directory
cd Tasks/Backend/Node/Task2

# Install dependencies and run script
npm install
node server.js
```

### For Express.js TypeScript Tasks:
```bash
# Navigate to the target Express task directory
cd Tasks/Backend/Express/Day7

# Install dependencies
npm install

# Start development server with tsx watch
npm run dev
```

---

[← Back to Main Tasks Hub](../README.md)
