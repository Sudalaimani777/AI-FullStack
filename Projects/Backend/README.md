# ⚙️ Backend Engineering Projects Hub

Welcome to the **Backend Engineering Projects Hub**, a dedicated collection of real-world backend API services, server architectures, microservices, and e-commerce platforms.

---

## 📂 Repository Architecture

```text
Projects/Backend/
└── 📁 UrbanCart/                                    # Full-Stack E-Commerce Platform
    ├── 📁 server/                                   # Express 5 + TypeScript + Mongoose + Zod + JWT REST API
    └── 📁 client/                                   # E-Commerce Frontend Client
```

---

## 🚀 Featured Backend Projects

### 🛒 UrbanCart E-Commerce Platform (`/UrbanCart`)
A production-grade, highly scalable E-Commerce backend API built with modern Node.js, Express 5, and TypeScript.

#### 🛠️ Technology Stack & Architecture
- **API Framework**: Express.js (v5.2) running on Node.js ES Modules (`"type": "module"`).
- **TypeScript**: TypeScript (v7.0) with hot-reloading development via `tsx watch`.
- **Database & ODM**: MongoDB Atlas / Local with Mongoose ODM (v9.9).
- **Security & Authentication**: Stateless JSON Web Tokens (`jsonwebtoken`), `bcrypt` password hashing, and `cors`.
- **Request Validation**: Strict payload schema validation using **Zod** (`zod` v4.4).

#### 🗄️ Core Data Models (`/server/src/model`)
- **`User` (`user-info.model.ts`)**: User account profiles, authentication data, hashed passwords, and role permissions (`user` vs `admin`).
- **`Product` (`product.model.ts`)**: E-Commerce product catalog items, prices, inventory counts, categories, and product metadata.

#### 🔗 API Endpoints (`/server/src/routes`)

| Method | Endpoint | Description | Auth Policy |
| :--- | :--- | :--- | :---: |
| `POST` | `/api/auth/register` | Register a new user account | Public |
| `POST` | `/api/auth/login` | Authenticate user & issue JWT token | Public |
| `GET` | `/api/products` | Retrieve all product catalog listings | Public |
| `GET` | `/api/products/:id` | Retrieve product details by ID | Public |
| `POST` | `/api/products` | Create a new product listing | 🔒 Admin |
| `PUT` | `/api/products/:id` | Update product details | 🔒 Admin |
| `DELETE` | `/api/products/:id` | Delete product listing from inventory | 🔒 Admin |

---

## 🛠️ Quickstart Guide

To run the **UrbanCart** backend REST API:

```bash
# 1. Navigate to the server directory
cd UrbanCart/server

# 2. Install dependencies
npm install

# 3. Configure environment variables (.env)
# PORT=5000
# MONGO_URI=mongodb://localhost:27017/urbancart
# JWT_SECRET=your_secret_key

# 4. Start development server with tsx watch
npm run dev
```

The Express REST API server will run on [http://localhost:5000](http://localhost:5000).

---

*Part of the Full-Stack Engineering Workspace.*
