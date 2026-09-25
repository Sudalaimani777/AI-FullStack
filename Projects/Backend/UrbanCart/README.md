# 🛒 UrbanCart - Full-Stack E-Commerce Platform

Welcome to **UrbanCart**, a production-grade full-stack e-commerce web platform engineered with a high-performance **Node.js / Express.js (v5)** REST API and a modern, responsive **React 19** frontend client.

UrbanCart is built around secure session management using HttpOnly JWT cookies, social Google OAuth authentication via Firebase, Zod-based request validation, role-based access control (RBAC), product inventory management, and an order processing lifecycle.

---

## 📂 Repository Architecture

```text
UrbanCart/
├── 📁 client/                                       # Modern React 19 Frontend Web Application
│   ├── 📁 src/
│   │   ├── 📁 api/                                  # Axios HTTP client with credentials & interceptors
│   │   ├── 📁 assets/                               # Static imagery, branding, and icons
│   │   ├── 📁 components/                           # Reusable UI components (admin, layout, login, profile, register)
│   │   ├── 📁 config/                               # Firebase client SDK initialization & Google Auth provider
│   │   ├── 📁 pages/                                # Route views (Home, Cart, Profile, Signin, Signup, Admin)
│   │   ├── 📁 routes/                               # Route definitions & guards (Protected, Guest, Admin)
│   │   ├── 📁 schemas/                              # Zod schemas for client form validation
│   │   ├── 📁 store/                                # Zustand global stores (useAuthStore, useCartStore)
│   │   └── 📁 types/                                # Frontend TypeScript interfaces & types
│   ├── 📄 .env.example                              # Frontend environment variable template
│   ├── 📄 package.json                              # Client scripts & dependencies
│   ├── 📄 tsconfig.json                             # Client TypeScript configuration
│   └── 📄 vite.config.ts                            # Vite bundler configuration with Tailwind CSS v4
│
├── 📁 server/                                       # Express.js + TypeScript E-Commerce REST API
│   ├── 📁 src/
│   │   ├── 📁 config/                               # MongoDB connection & Firebase Admin SDK configs
│   │   ├── 📁 controllers/                          # Route controller logic (auth, products, orders)
│   │   ├── 📁 middlewares/                          # Auth protection, admin check, validation, error handler
│   │   ├── 📁 models/                               # Mongoose data schemas (User, Product, Order)
│   │   ├── 📁 routes/                               # Express modular route definitions
│   │   ├── 📁 services/                             # Business logic layer (auth, product, order)
│   │   ├── 📁 types/                                # Backend TypeScript type definitions
│   │   ├── 📁 utils/                                # Async handler, custom API error utilities
│   │   ├── 📁 validators/                           # Zod schemas for request validation
│   │   └── 📄 server.ts                             # Express application bootstrap & route mounting
│   ├── 📄 .env.example                              # Server environment variable template
│   ├── 📄 package.json                              # Server scripts & dependencies
│   └── 📄 tsconfig.json                             # Server TypeScript compiler configuration
│
└── 📄 README.md                                     # Root project documentation
```

---

## ⚡ Technology Stack

### 🌐 Backend REST API (`/server`)
- **Runtime**: [Node.js](https://nodejs.org/) (ES Modules `"type": "module"`)
- **Web Framework**: [Express.js (v5)](https://expressjs.com/)
- **Language**: [TypeScript](https://www.typescriptlang.org/) executed with `tsx watch`
- **Database & ODM**: [MongoDB](https://www.mongodb.com/) + [Mongoose](https://mongoosejs.com/)
- **Authentication**: JSON Web Tokens (`jsonwebtoken`) stored in HttpOnly cookies, `bcrypt` password hashing, and [Firebase Admin](https://firebase.google.com/docs/admin/setup) for Google token verification
- **Validation**: [Zod](https://zod.dev/) schema validation middleware
- **Security & Utilities**: `cookie-parser`, `cors` (credentialed cross-origin sharing)

### 🎨 Frontend Web Client (`/client`)
- **Core Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 8](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Routing**: [React Router DOM v7](https://reactrouter.com/) with route guards (`ProtectedRoute`, `GuestRoute`, `AdminRoute`)
- **State Management**: [Zustand v5](https://github.com/pmndrs/zustand) with localStorage cart persistence
- **Data Fetching**: [Axios](https://axios-http.com/) & [@tanstack/react-query](https://tanstack.com/query)
- **Forms & Validation**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Authentication**: [Firebase Client SDK](https://firebase.google.com/) for Google Sign-In popup
- **Icons**: [Lucide React](https://lucide.dev/)
- **Linting**: [Oxlint](https://oxc.rs/docs/guide/usage/linter)

---

## 🗄️ Database Schemas & Data Models

### 👤 1. User Model (`user-info.model.ts`)
- Manages user profiles, credentials, role-based authorization, and timestamps.
- **Fields**: `user_name`, `user_email`, `user_password` (hashed with bcrypt), `is_admin` (boolean role flag), `google_id`, and `created_at`.

### 📦 2. Product Model (`product.model.ts`)
- Maintains the inventory catalog, categorization, pricing, and stock levels.
- **Fields**: `product_name`, `product_price`, `product_description`, `product_category`, `product_stock`, `product_image`, and timestamps.

### 📋 3. Order Model (`order.model.ts`)
- Tracks purchase history, itemized snapshots, order values, shipping destinations, and status transitions.
- **Fields**: `user_id` (ref User), `order_items` (product ref, quantity, price snapshot), `shipping_address`, `total_amount`, `order_status` (`pending`, `processing`, `shipped`, `delivered`, `cancelled`), and timestamps.

---

## 🔗 Complete REST API Reference

All backend endpoints are prefixed with `/api`.

### 🔐 Authentication (`/api/auth`)

| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :---: |
| `POST` | `/api/auth/sign-up` | Register a new user account with validated credentials | ❌ |
| `POST` | `/api/auth/sign-in` | Authenticate credentials & set secure HttpOnly JWT cookie | ❌ |
| `POST` | `/api/auth/google` | Verify Firebase Google ID token and log in / create user | ❌ |
| `GET` | `/api/auth/profile` | Retrieve the authenticated user's current session & profile | 🔒 User |
| `POST` | `/api/auth/signout` | Invalidate session and clear the HttpOnly auth cookie | 🔒 User |

### 📦 Product Catalog (`/api`)

| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :---: |
| `GET` | `/api/products` | Retrieve all catalog products with optional filters | ❌ |
| `GET` | `/api/product/:id` | Fetch detailed information for a single product | ❌ |
| `POST` | `/api/products` | Create a new product entry in inventory | 🔒 Admin |
| `PUT` | `/api/product/:id` | Update an existing product's details and stock | 🔒 Admin |
| `DELETE` | `/api/product/:id` | Remove a product from the catalog | 🔒 Admin |

### 🛍️ Orders & Checkout (`/api`)

| Method | Endpoint | Description | Auth Required |
| :--- | :--- | :--- | :---: |
| `POST` | `/api/order` | Place a new order with items and shipping details | 🔒 User |
| `GET` | `/api/orders/myorders` | Retrieve purchase history for the logged-in user | 🔒 User |
| `GET` | `/api/orders/:id` | Fetch specific order details by ID | 🔒 User |
| `GET` | `/api/orders/allorders` | Retrieve all platform orders across all customers | 🔒 Admin |
| `PATCH` | `/api/orders/:id/status` | Update order fulfillment status (`pending`, `delivered`, etc.) | 🔒 Admin |

---

## ⚙️ Environment Configuration

### 1. Server Environment (`server/.env`)
Create `server/.env` based on `server/.env.example`:

```env
PORT=5000
MONGO_URL=mongodb://localhost:27017/urbancart
JWT_SECRET_TOKEN=your_jwt_secret_token_here

# Firebase Admin SDK Credentials (for Google Token Verification)
FIREBASE_PROJECT_ID=your_firebase_project_id
FIREBASE_CLIENT_EMAIL=your_firebase_client_email
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nyour_key\n-----END PRIVATE KEY-----\n"
```

### 2. Client Environment (`client/.env`)
Create `client/.env` based on `client/.env.example`:

```env
VITE_API_URL=http://localhost:5000/api

# Firebase Web App Credentials
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

---

## 🛠️ Quickstart Guide

### Prerequisites
- [Node.js (v18+)](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/) (Local service or MongoDB Atlas cluster)
- [Firebase Project](https://console.firebase.google.com/) with Google Sign-in enabled

### 1. Run the Backend Server
```bash
cd server
npm install
npm run dev
```
The REST API starts on **[http://localhost:5000](http://localhost:5000)** (or the port defined in `.env`).

### 2. Run the Frontend Client
In a separate terminal:
```bash
cd client
npm install
npm run dev
```
The client will launch on **[http://localhost:5173](http://localhost:5173)** with instant hot reload.

---

## 🔒 Security Architecture Highlights

1. **HttpOnly Cookie Authentication**: JWT access tokens are set with `httpOnly: true`, mitigating cross-site scripting (XSS) token theft.
2. **CORS with Credentials**: The backend explicitly configures CORS with `origin: "http://localhost:5173"` and `credentials: true` to permit secure cookie exchange.
3. **Strict Request Validation**: Incoming requests are validated against TypeScript-inferred Zod schemas before reaching the controller.
4. **Role-Based Guards**:
   - `protectMiddleWare`: Verifies token signature and attaches the authenticated user.
   - `adminMiddleware`: Enforces `is_admin === true` for sensitive operational endpoints.
   - Client-side navigation guards mirror server permissions to ensure seamless user routing.

---

## 📜 Repository Scripts

| Package | Command | Description |
| :--- | :--- | :--- |
| **Server** | `npm run dev` | Runs backend in watch mode with `tsx watch` |
| **Server** | `npm run build` | Compiles TypeScript to JavaScript in `/dist` |
| **Server** | `npm start` | Launches compiled production server |
| **Client** | `npm run dev` | Launches Vite local development server |
| **Client** | `npm run build` | Builds optimized production frontend bundle |
| **Client** | `npm run lint` | Runs Oxlint across frontend source files |

---

*Part of the UrbanCart Full-Stack E-Commerce Project.*
