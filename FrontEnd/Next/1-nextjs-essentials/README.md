# ⚛️ Next.js 15+ Core Essentials

Welcome to **Next.js Core Essentials**, a structured deep-dive into Next.js App Router architecture, rendering strategies, client vs. server components, routing, and data-fetching techniques (SSR, SSG, ISR, React Query).

---

## 📂 Repository Architecture

```text
1-nextjs-essentials/
├── 📄 notes.txt                                     # Comprehensive study notes & cheat sheet
├── 📁 1-installation/                               # Next.js setup & folder structure breakdown
├── 📁 2-exploring-page-and-app-directory/          # App Router routing, dynamic routes & route grouping
├── 📁 3-cient-and-server-component-understanding/  # Client vs Server Components & Hydration
├── 📁 4-data-fetching-methods-ssr-ssg/             # Server-Side Rendering (SSR) & Static Site Generation (SSG)
└── 📁 5-data-fetching-methods-react-query/         # Client-side data fetching with TanStack React Query
```

---

## 📚 Module & Chapter Breakdown

### 🟢 Chapter 1: Installation & Directory Anatomy (`1-installation`)
Understanding the Next.js App Router project structure:
- **`app/`**: Root UI & routing structure (`page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`, `not-found.tsx`, `route.ts`).
- **`public/`**: Static assets served directly at root (images, icons, fonts, media).
- **`next.config.ts`**: Core runtime, fetch logging, redirects, and image optimization settings.
- **`tsconfig.json`**: TypeScript rules, path aliases (`@/*`), and strict type checking.

---

### 🔵 Chapter 2: App Router & Route Grouping (`2-exploring-page-and-app-directory`)
Mastering Next.js file-system routing:
- **File-based Routing**: Folders represent URL routes (`/dashboard`, `/dashboard/[id]`).
- **Layouts (`layout.tsx`)**: Shared nested UI wrapping child pages without re-rendering.
- **Route Groups `(folder)`**: Organizing routes logically without impacting the public URL structure (e.g. `(auth)/login` resolves to `/login`).

---

### 🟡 Chapter 3: Client vs Server Components (`3-cient-and-server-component-understanding`)
Understanding React Server Components (RSC) and rendering paradigms:
- **Server Components (Default)**: Rendered on the server, zero JavaScript sent to client, better SEO, faster First Contentful Paint (FCP).
- **Client Components (`"use client"`)**: Opt-in directive for components requiring state (`useState`), side-effects (`useEffect`), event listeners (`onClick`), or browser APIs (`localStorage`).
- **Hydration**: The process where React attaches event listeners to pre-rendered HTML DOM elements sent from the server.

---

### 🔴 Chapter 4: Data Fetching Strategies: SSR, SSG & ISR (`4-data-fetching-methods-ssr-ssg`)
Deep-dive into caching, pre-rendering, and revalidation:
- **SSG (Static Site Generation)**: Pages generated at build time (`cache: "force-cache"`).
- **SSR (Server-Side Rendering)**: Pages dynamically rendered per request (`cache: "no-store"`).
- **ISR (Incremental Static Regeneration)**: Stale data revalidated on demand or periodically (`next: { revalidate: 3600 }`).
- **Tag-based Cache Invalidation**: On-demand revalidation using `next: { tags: ["posts"] }`.

#### Fetch Cache Matrix

| Option / Directive | Example Syntax | Behavior & Use Case |
| :--- | :--- | :--- |
| `force-cache` | `fetch(url, { cache: "force-cache" })` | Cache response indefinitely (Static data) |
| `no-store` | `fetch(url, { cache: "no-store" })` | Fetch fresh data on every request (Dynamic / Auth data) |
| `revalidate` | `fetch(url, { next: { revalidate: 3600 } })` | Cache & revalidate after time interval (Periodical data) |
| `tags` | `fetch(url, { next: { tags: ['posts'] } })` | Tagged cache for on-demand programmatic purge |

---

### 🟣 Chapter 5: Client-Side Data Fetching with React Query (`5-data-fetching-methods-react-query`)
Integrating **TanStack React Query** for client-side state management:
- Client-side data fetching with caching, automatic background refetching, and polling.
- Wrapping layout with `QueryClientProvider`.
- Combining Server Component initial data hydration with React Query client state.

---

## 🛠️ Quickstart Guide

To run any sample project within this module:

```bash
# Navigate to the target module directory (e.g. 1-installation)
cd 1-installation

# Install dependencies
npm install

# Start Next.js development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

*Part of the Next.js & Full-Stack Learning Path.*
