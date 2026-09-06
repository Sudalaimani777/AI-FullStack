# 🛒 UrbanCart - Full-Stack E-Commerce Platform

Welcome to **UrbanCart**, a full-stack E-Commerce application featuring a high-performance RESTful API backend built using **Node.js**, **Express.js (v5)**, **TypeScript**, **MongoDB (Mongoose)**, **Zod Schema Validation**, **Bcrypt**, and **JWT Authentication**.

---

## 📂 Repository Architecture

```text
UrbanCart/
├── 📁 server/                                       # Express.js + TypeScript E-Commerce Backend REST API
│   ├── 📁 src/
│   │   ├── 📁 config/                               # MongoDB connection setup & environment configs
│   │   ├── 📁 controller/                           # Auth & Product request controllers
│   │   ├── 📁 middleware/                           # JWT auth verification & validation middleware
│   │   ├── 📁 model/                                # Mongoose data schemas (User, Product)
│   │   ├── 📁 routes/                               # Express API route endpoints (auth, products)
│   │   ├── 📁 schema/                               # Zod schema definitions for payload validation
│   │   ├── 📁 types/                                # TypeScript interface & type definitions
│   │   └── 📄 server.ts                             # Main Express application entry point
│   ├── 📄 package.json                              # Node.js dependencies & scripts
│   ├── 📄 tsconfig.json                             # TypeScript compiler configuration
│   └── 📄 .env.example                              # Environment variable template
│
└── 📁 client/                                       # E-Commerce Frontend Application
```

---

## ⚡ Technology Stack & Tools

### 🌐 Backend REST API (`/server`)
- **Runtime**: Node.js (ES Modules `"type": "module"`)
- **Framework**: Express.js (v5.2)
- **Language**: TypeScript (v7.0) with hot-reloading via `tsx watch`
- **Database ODM**: MongoDB Atlas / Local + Mongoose (v9.9)
- **Security & Auth**: JSON Web Tokens (`jsonwebtoken`), `bcrypt` password hashing, `cors`
- **Request Validation**: Zod (`zod` v4.4)

---

## 🗄️ Database Schemas & Models

### 👤 User Info Model (`user-info.model.ts`)
- Manages user profiles, registration details, role assignments (`user` vs. `admin`), and hashed passwords.

### 📦 Product Model (`product.model.ts`)
- Handles product catalog items, prices, category tags, stock inventory levels, and product metadata.

---

## 🔗 API Endpoint Hierarchy

| HTTP Method | Route Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :---: |
| `POST` | `/api/auth/register` | Register a new user account | ❌ |
| `POST` | `/api/auth/login` | Authenticate user & return JWT token | ❌ |
| `GET` | `/api/products` | Fetch all catalog products | ❌ |
| `GET` | `/api/products/:id` | Fetch specific product details | ❌ |
| `POST` | `/api/products` | Create a new product listing | 🔒 (Admin) |
| `PUT` | `/api/products/:id` | Update an existing product listing | 🔒 (Admin) |
| `DELETE` | `/api/products/:id` | Delete a product from inventory | 🔒 (Admin) |

---

## 🛠️ Quickstart Guide

### 1. Configure Server Environment
Navigate to the `server/` directory and create a `.env` file based on `.env.example`:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/urbancart
JWT_SECRET=your_jwt_secret_key_here
```

### 2. Install Server Dependencies
```bash
cd server
npm install
```

### 3. Launch Development Server
```bash
npm run dev
```

The server will initialize on [http://localhost:5000](http://localhost:5000) using `tsx watch` for instant TypeScript re-compilation.

---

*Part of the E-Commerce & Full-Stack Projects Suite.*
