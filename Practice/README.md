# 🏋️ Practical Projects & Full-Stack Exercises

Welcome to the **Practical Projects & Full-Stack Exercises Hub**, a dedicated workspace containing hands-on practice implementations, integration experiments, and end-to-end full-stack web applications.

---

## 📂 Repository Architecture

```text
Practice/
└── 📁 fullstack/                                     # Decoupled Full-Stack Web Applications
    └── 📁 1-LoginAndRegister/                        # End-to-end User Authentication System
        ├── 📁 frontend/                              # React 19 + TypeScript + Vite + Tailwind CSS v4 + Zustand
        └── 📁 backend/                               # Node.js + Express 5 + TypeScript + Mongoose + Bcrypt
```

---

## 🚀 Projects Overview

### 1. 🌐 Full-Stack Applications (`/fullstack`)
Contains production-grade, decoupled full-stack projects connecting modern client frontends with backend APIs and database persistence layers.

#### Featured Implementation: 🔐 `1-LoginAndRegister`
- **Frontend Stack**: React 19, TypeScript, Vite, Tailwind CSS v4, Zustand, React Router DOM (v7), Axios.
- **Backend Stack**: Node.js, Express.js (v5), TypeScript (`tsx watch`), MongoDB (Mongoose ODM), `bcrypt` password hashing, CORS, `dotenv`.
- **Key Highlights**:
  - Secure password salting & hashing via `bcrypt`.
  - State management using Zustand.
  - End-to-end static type enforcement across client and server.
  - Responsive authentication pages built with Tailwind CSS v4.

---

## 🛠️ Quickstart Guide

To run any practice project:

```bash
# Navigate to the fullstack authentication application
cd fullstack/1-LoginAndRegister

# 1. Start the Backend API (Port 5000)
cd backend && npm install && npm run dev

# 2. Start the Frontend Client (Port 5173) in a second terminal
cd ../frontend && npm install && npm run dev
```

---

*Part of the Full-Stack Engineering Practice Workspace.*
