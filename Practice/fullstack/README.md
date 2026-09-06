# 🌐 Full-Stack Application Practice Hub

Welcome to the **Full-Stack Application Practice Hub**, a collection of real-world end-to-end full-stack projects combining modern React TypeScript frontends with Express Node.js TypeScript backends and MongoDB databases.

---

## 📂 Repository Architecture

```text
fullstack/
└── 📁 1-LoginAndRegister/             # Decoupled Full-Stack User Authentication System
    ├── 📁 frontend/                   # React 19 + TypeScript + Vite + Tailwind CSS v4 + Zustand
    └── 📁 backend/                    # Node.js + Express 5 + TypeScript + Mongoose + Bcrypt
```

---

## 🚀 Projects Overview

### 1. 🔐 User Login & Registration System (`1-LoginAndRegister`)

A full-stack authentication web application demonstrating user registration, secure password hashing, API client integration, client-side routing, and global state management.

#### 🛠️ Tech Stack

| Domain | Technologies Used |
| :--- | :--- |
| **Frontend UI** | React 19, TypeScript, Vite, Tailwind CSS v4 |
| **Client State & Routing** | Zustand, React Router DOM (v7), Axios |
| **Backend REST API** | Node.js, Express.js (v5), TypeScript (`tsx watch`) |
| **Database & Security** | MongoDB (Mongoose ODM), `bcrypt` password hashing, CORS, `dotenv` |

#### ⚙️ Features
- **Secure Password Hashing**: Hashing user passwords on registration using `bcrypt` before storing in MongoDB.
- **TypeScript End-to-End**: Static type definitions across both client (`vite.config.ts`) and server (`src/server.ts`).
- **State Management**: Client global authentication state handled via `zustand`.
- **CORS Communication**: Configured cross-origin resource sharing allowing frontend client communication with Express API.
- **Modern Styling**: Styled using **Tailwind CSS v4** `@tailwindcss/vite` integration.

---

## 🛠️ Quickstart Guide

To run the `1-LoginAndRegister` full-stack application:

### 1. Start the Backend Server
```bash
# Navigate to backend directory
cd 1-LoginAndRegister/backend

# Install dependencies
npm install

# Start Express server in development mode (tsx watch)
npm run dev
```
*The Express server will start on port `5000` (or specified `.env` PORT).*

### 2. Start the Frontend Client
```bash
# Open a new terminal and navigate to frontend directory
cd 1-LoginAndRegister/frontend

# Install dependencies
npm install

# Start Vite development server
npm run dev
```
*The React application will run on [http://localhost:5173](http://localhost:5173).*

---

*Part of the Full-Stack Engineering Practice Workspace.*
