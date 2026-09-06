# ⚙️ Full-Stack Backend & Application Projects Hub

Welcome to the **Full-Stack Backend & Application Projects Hub**, a production-grade collection of complex web systems, publishing platforms, content management systems (CMS), and e-commerce APIs.

---

## 📂 Repository Architecture

```text
Projects/Backend/
├── 📁 cms/                                          # Content Management System (CMS) & Publishing Suite
│   └── 📁 client/                                   # Next.js 16 App Router + Prisma ORM + NextAuth + MongoDB
│
└── 📁 UrbanCart/                                    # Full-Stack E-Commerce Platform & REST API
    ├── 📁 server/                                   # Express 5 + TypeScript + Mongoose + Zod + JWT
    └── 📁 client/                                   # E-Commerce Frontend Client
```

---

## 🚀 Projects Overview

### 1. 📰 Content Management System Suite (`/cms`)
A production-grade CMS and blogging platform built for digital publishing and content creation.

#### 🛠️ Technology Stack & Key Highlights
- **Frontend & App Router**: Next.js 16 (App Router), React 19, TypeScript.
- **Database & ORM**: MongoDB database powered by **Prisma ORM (v6)** with `@prisma/extension-accelerate`.
- **Authentication**: NextAuth.js (v4) with `@next-auth/prisma-adapter` supporting OAuth, email verification, and session management.
- **Styling**: Tailwind CSS v4, Lucide Icons, Base UI, Shadcn UI components.
- **Core Capabilities**:
  - Admin CMS Dashboard (`/dashboard`) for article publishing, category tagging, and user role management.
  - Post Publishing Lifecycle (`PostStatus`: `DRAFT`, `PUBLISHED`, `DELETED`, `ARCHIVE`).
  - Search engine (`/search`) and real-world drafting workspace (`/draft`).

---

### 2. 🛒 UrbanCart E-Commerce Platform (`/UrbanCart`)
A scalable e-commerce application featuring a high-performance RESTful API backend.

#### 🛠️ Technology Stack & Key Highlights
- **API Framework**: Express.js (v5.2) running on Node.js ES Modules with TypeScript (`tsx watch`).
- **Database & Modeling**: MongoDB + Mongoose ODM (v9.9).
- **Security & Auth**: JSON Web Tokens (`jsonwebtoken`), `bcrypt` password hashing, CORS.
- **Payload Validation**: Schema validation using **Zod** (`zod` v4.4).
- **Core Capabilities**:
  - Auth endpoints (`/api/auth/register`, `/api/auth/login`).
  - Product catalog CRUD operations (`/api/products`) with admin-restricted authorization policies.

---

## 🛠️ Quickstart Guide

To run any backend project:

### Running the CMS Platform
```bash
cd cms/client
npm install
npx prisma generate
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the CMS App Router platform.

### Running the UrbanCart API Server
```bash
cd UrbanCart/server
npm install
npm run dev
```
Open [http://localhost:5000](http://localhost:5000) to interact with the UrbanCart Express REST API.

---

*Part of the Full-Stack Engineering Projects Suite.*
