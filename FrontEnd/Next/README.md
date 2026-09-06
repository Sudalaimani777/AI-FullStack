# 🔺 Next.js 15+ Full-Stack Masterclass

Welcome to the **Next.js 15+ Masterclass** hub! This repository contains a structured, production-ready curriculum for mastering modern Next.js using the **App Router**, **React Server Components (RSC)**, **Tailwind CSS**, **API Route Handlers**, **Rate Limiting**, and **Advanced SEO & Web Vitals Optimizations**.

---

## 📂 Master Repository Architecture

```text
Next/
├── 📁 1-nextjs-essentials/                          # Core fundamentals & App Router architecture
│   ├── 📁 1-installation/                           # Project setup & folder structure breakdown
│   ├── 📁 2-exploring-page-and-app-directory/        # File-based routing, nested layouts & route groups
│   ├── 📁 3-cient-and-server-component-understanding/ # RSC vs. Client Components, DOM Hydration & FCP
│   ├── 📁 4-data-fetching-methods-ssr-ssg/           # SSR, SSG, ISR, Caching & Revalidation
│   └── 📁 5-data-fetching-methods-react-query/       # Client data fetching with TanStack React Query
│
└── 📁 2-building-and-enhancing/                     # Full-stack features, API endpoints & performance
    ├── 📁 1-styling/                                # Global CSS, CSS Modules, Specificity & Tailwind CSS v4
    ├── 📁 2-api/                                    # Route Handlers (GET, POST, PUT, DELETE) & Rate Limiting
    └── 📁 3-seo-and-performance/                    # Image Optimization, Metadata API, sitemap.ts & robots.ts
```

---

## 🚀 Module Overview

### 📘 Module 1: Next.js Essentials (`1-nextjs-essentials`)
Master the foundational concepts powering Next.js 15 App Router:
- **Directory Anatomy**: Understanding `app/`, `public/`, `layout.tsx`, `page.tsx`, `loading.tsx`, `error.tsx`, and `not-found.tsx`.
- **App Router Routing**: Nested layouts, dynamic routes (`[id]`), and Route Groups `(group)` for URL isolation.
- **Server vs. Client Components**: When to use default React Server Components (RSC) vs. `"use client"` directives.
- **Data Fetching & Caching Matrix**:
  - **SSG**: Indefinite caching (`cache: "force-cache"`).
  - **SSR**: Dynamic per-request rendering (`cache: "no-store"`).
  - **ISR**: Periodic background revalidation (`next: { revalidate: 3600 }`).
  - **Tag Purging**: On-demand cache invalidation (`next: { tags: ["posts"] }`).
- **TanStack React Query**: Integrating client-side caching, polling, and UI state synchronization.

---

### 📙 Module 2: Building & Enhancing Applications (`2-building-and-enhancing`)
Build production-ready applications with robust styling, native API endpoints, and search engine optimization:
- **Styling Architectures**: Comparing Global CSS (`globals.css`), component-scoped CSS Modules (`*.module.css`), and Tailwind CSS v4.
- **API Route Handlers (`route.ts`)**: Native RESTful HTTP endpoint construction returning `NextResponse.json()`.
- **Rate Limiting & Security**: Middleware-level request throttling (`middleware.ts`) to defend against DDoS and brute-force attacks.
- **Image & Core Web Vitals Optimization**: Reducing Cumulative Layout Shift (CLS) with `next/image` lazy loading and WebP/AVIF formatting.
- **Metadata & SEO**: Generating static metadata objects, dynamic `generateMetadata()`, custom OpenGraph / Twitter preview cards, dynamic `sitemap.ts`, and `robots.ts`.

---

## 🛠️ Global Quickstart

To run any sub-project in this Next.js repository:

```bash
# Example: Navigate to 1-nextjs-essentials/1-installation
cd 1-nextjs-essentials/1-installation

# Install dependencies
npm install

# Start Next.js development server
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view your running application.

---

*Part of the Full-Stack Engineering Workspace.*
