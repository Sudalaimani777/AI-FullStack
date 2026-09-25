# 🛠️ UrbanCart Server - RESTful API Backend

The **UrbanCart Backend** is a high-performance REST API built with **Node.js**, **Express.js (v5)**, **TypeScript**, and **MongoDB (Mongoose)**. It provides complete services for user authentication, product management, order processing, and administrative controls.

---

## 📂 Backend Architecture

```text
server/
├── 📁 src/
│   ├── 📁 config/                               # MongoDB connection & Firebase Admin setup
│   │   ├── 📄 db.ts                             # Mongoose connection logic
│   │   ├── 📄 firebase.config.ts                # Firebase Admin credential initializations
│   │   └── 📄 index.ts                          # Configuration exports
│   ├── 📁 controllers/                          # HTTP controllers
│   │   ├── 📁 auth/                             # Sign-up, sign-in, sign-out, profile, google-auth
│   │   ├── 📁 order/                            # Order placement, status update, order history
│   │   └── 📁 products/                         # Product CRUD handlers
│   ├── 📁 middlewares/                          # Express middleware layer
│   │   ├── 📁 auth/                             # protectMiddleWare & adminMiddleware
│   │   ├── 📄 error.middleware.ts               # Global API error boundary
│   │   └── 📄 validate.middleware.ts            # Zod validation middleware
│   ├── 📁 models/                               # Mongoose models & schemas
│   │   ├── 📄 order.model.ts                    # Order schema & items snapshot
│   │   ├── 📄 product.model.ts                  # Product catalog schema
│   │   └── 📄 user-info.model.ts                # User identity & credentials schema
│   ├── 📁 routes/                               # Express modular routing
│   │   ├── 📁 auth/                             # Auth route handlers
│   │   ├── 📁 order/                            # Order route handlers
│   │   └── 📁 products/                         # Product catalog route handlers
│   ├── 📁 services/                             # Business logic & data access services
│   │   ├── 📄 auth.service.ts
│   │   ├── 📄 order.service.ts
│   │   └── 📄 product.service.ts
│   ├── 📁 types/                                # TypeScript type definitions
│   ├── 📁 utils/                                # API error & async helper functions
│   ├── 📁 validators/                           # Zod validation schemas
│   └── 📄 server.ts                             # Application entry point & route registration
├── 📄 .env.example                              # Environment configuration template
├── 📄 package.json                              # Scripts and dependencies
└── 📄 tsconfig.json                             # TypeScript compiler configuration
```

---

## ⚡ Tech Stack & Tools

- **Runtime**: Node.js (ES Modules `"type": "module"`)
- **Framework**: Express.js 5.2
- **Language**: TypeScript with hot reloading via `tsx watch`
- **Database**: MongoDB Atlas / Local with Mongoose 9.9
- **Authentication**: JWT (`jsonwebtoken`) in HttpOnly cookies, `bcrypt` password hashing, and Firebase Admin SDK for Google token verification
- **Validation**: Zod 4
- **Cookie & CORS**: `cookie-parser`, `cors` configured for `credentials: true`

---

## 🔗 Endpoint Reference

### 🔐 Authentication (`/api/auth`)
- `POST /api/auth/sign-up`: Register a new user
- `POST /api/auth/sign-in`: Authenticate user & attach HttpOnly JWT cookie
- `POST /api/auth/google`: Authenticate with Google ID token via Firebase Admin
- `GET /api/auth/profile`: Get current authenticated user profile *(Protected)*
- `POST /api/auth/signout`: Clear auth cookie and logout *(Protected)*

### 📦 Products (`/api`)
- `GET /api/products`: Retrieve all products
- `GET /api/product/:id`: Retrieve single product details
- `POST /api/products`: Create a new product *(Admin Only)*
- `PUT /api/product/:id`: Update existing product *(Admin Only)*
- `DELETE /api/product/:id`: Remove product *(Admin Only)*

### 🛍️ Orders (`/api`)
- `POST /api/order`: Create a new customer order *(Protected)*
- `GET /api/orders/myorders`: Retrieve current user's orders *(Protected)*
- `GET /api/orders/:id`: Get order details by ID *(Protected)*
- `GET /api/orders/allorders`: Retrieve all customer orders *(Admin Only)*
- `PATCH /api/orders/:id/status`: Update status of an order *(Admin Only)*

---

## ⚙️ Environment Variables

Create `server/.env` based on `server/.env.example`:

```env
PORT=5000
MONGO_URL=mongodb://localhost:27017/urbancart
JWT_SECRET_TOKEN=your_jwt_secret_token

FIREBASE_PROJECT_ID=your_firebase_project_id
FIREBASE_CLIENT_EMAIL=your_firebase_client_email
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nyour_key\n-----END PRIVATE KEY-----\n"
```

---

## 🛠️ Quickstart

```bash
cd server
npm install
npm run dev
```

Server starts on [http://localhost:5000](http://localhost:5000).
