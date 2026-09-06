# 📰 Full-Stack CMS Client & Publishing Platform

Welcome to the **CMS Client Platform**, a modern, full-stack Content Management System (CMS) and blogging frontend built using **Next.js 16 (App Router)**, **React 19**, **Prisma ORM**, **MongoDB**, **NextAuth.js**, and **Tailwind CSS v4**.

---

## 📂 Repository Architecture

```text
client/
├── 📁 app/                                          # Next.js App Router routes & API endpoints
│   ├── 📁 (auth)/                                  # Authentication routes (Login / Signup)
│   ├── 📁 api/                                     # NextAuth & database API route handlers
│   ├── 📁 blog/ & 📁 blogs/                        # Public blog viewing & dynamic article pages
│   ├── 📁 dashboard/                               # Admin CMS Dashboard (Posts, Users & Categories)
│   ├── 📁 draft/                                   # Post drafting & publishing workspace
│   ├── 📁 search/                                  # Full-text search interface
│   ├── 📄 layout.tsx                               # Global layout & NextAuth Provider setup
│   └── 📄 page.tsx                                 # Landing page homepage
├── 📁 components/                                  # Reusable UI & Shadcn components
├── 📁 data/                                        # Static datasets & mock helpers
├── 📁 hooks/                                       # Custom React hooks
├── 📁 lib/                                         # Prisma Client instance & NextAuth config
├── 📁 prisma/                                      # Prisma schema & MongoDB database model definitions
│   └── 📄 schema.prisma                            # User, Account, Session, Post, Category models
├── 📁 provider/                                    # Context & Theme providers
└── 📁 types/                                       # TypeScript type definitions
```

---

## 🚀 Key Features & Stack Overview

### 🛠️ Technology Stack

| Domain | Technologies Used |
| :--- | :--- |
| **Framework** | Next.js 16 (App Router), React 19, TypeScript |
| **Database & ORM** | MongoDB, Prisma ORM (v6), Prisma Accelerate |
| **Authentication** | NextAuth.js (v4), `@next-auth/prisma-adapter` |
| **Styling & UI** | Tailwind CSS v4, Lucide Icons, Shadcn UI, Base UI |
| **State & Helpers** | Class Variance Authority (`cva`), `clsx`, `tailwind-merge` |

---

### 🗄️ Database Schemas (`prisma/schema.prisma`)

- **`User`**: Supports role-based permissions (`role: "user" | "admin"`), user accounts, and relations to created & authored posts.
- **`Post`**: Full publishing lifecycle with `PostStatus` (`DRAFT`, `PUBLISHED`, `DELETED`, `ARCHIVE`), title, slug, HTML/Markdown content, thumbnails, SEO metadata (excerpt, keywords), and category relations.
- **`Category`**: Post categorizations linked by unique category slugs.
- **NextAuth Models**: `Account`, `Session`, and `VerificationRequest` for OAuth and session handling.

---

### 💻 Application Modules

1. **Admin CMS Dashboard (`/dashboard`)**: Manage posts, edit content, categorize articles, and assign publishing statuses (`DRAFT` vs `PUBLISHED`).
2. **Public Blog Reader (`/blog`, `/blogs`)**: Fast, SEO-optimized static and dynamic post rendering.
3. **Drafting Workspace (`/draft`)**: Real-time content creation and editing interface.
4. **Search Engine (`/search`)**: Filter posts dynamically by keywords, tags, or categories.

---

## 🛠️ Quickstart & Setup Guide

### 1. Configure Environment Variables
Create a `.env` file in the root of `client/`:

```env
DATABASE_URI="mongodb+srv://<username>:<password>@cluster.mongodb.net/cms_db?retryWrites=true&w=majority"
NEXTAUTH_SECRET="your_nextauth_secret_key"
NEXTAUTH_URL="http://localhost:3000"
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Generate Prisma Client
```bash
npx prisma generate
```

### 4. Start the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to launch the CMS application.

---

*Part of the CMS Full-Stack Suite.*
