# 🚀 Next.js 15+ Building & Enhancing Applications

Welcome to **Building and Enhancing Next.js Applications**, an advanced module focusing on modern CSS & styling architectures, full-stack API Route Handlers with rate limiting, and production-grade SEO & web performance optimizations.

---

## 📂 Repository Architecture

```text
2-building-and-enhancing/
├── 📁 1-styling/                                    # Global CSS, CSS Modules, Specificity & Tailwind CSS
├── 📁 2-api/                                        # Route Handlers, REST API design & Rate Limiting / Throttling
│   ├── 📁 1-creating-api-endpoints/                 # Native API routes (GET, POST, PUT, DELETE)
│   └── 📁 2-rate-limiting-throttling-request/        # Request rate limiting & middleware security
└── 📁 3-seo-and-performance/                        # Web Vitals, Image Optimization & Metadata API
    ├── 📁 1-image-optimization/                     # next/image component & Cumulative Layout Shift (CLS)
    ├── 📁 2-roles-sematic-sitemap-and-robots-seo/   # Dynamic sitemap.ts, robots.ts & ARIA semantics
    └── 📁 3-metadata-seo/                           # Static & dynamic generateMetadata(), OpenGraph & Twitter Cards
```

---

## 📚 Section Highlights & Key Concepts

### 🎨 Section 1: CSS & Styling Architectures (`1-styling`)
Mastering design integration in the App Router:
- **Global CSS (`globals.css`)**: App-wide styling, CSS variables, base resets loaded via `app/layout.tsx`.
- **CSS Modules (`*.module.css`)**: Component-scoped styling preventing global namespace collisions.
- **CSS Specificity**: Understanding selector hierarchy (Element < Class < ID < Inline) and avoiding code smells like `!important`.
- **Tailwind CSS v4 Integration**: Utility-first CSS workflow with zero-config compilation and rapid responsive UI building.

---

### 🔌 Section 2: Full-Stack API Route Handlers (`2-api`)
Building backend services natively within Next.js:
- **Route Handlers (`route.ts`)**: HTTP method handlers (`GET`, `POST`, `PUT`, `DELETE`, `PATCH`) returning `NextResponse`.
- **Request Parsing & Response Serialization**: JSON payload parsing, header manipulation, and status code assignment.
- **Rate Limiting & Request Throttling**: Protecting endpoints against DDoS and brute-force attacks using custom middleware (`middleware.ts`) and token-bucket / sliding-window algorithms.

---

### ⚡ Section 3: SEO, Web Vitals & Performance (`3-seo-and-performance`)
Optimizing for Search Engines and Core Web Vitals:
- **Image Optimization (`next/image`)**: Automatic format selection (WebP/AVIF), responsive image sizing, lazy loading, and zero Cumulative Layout Shift (CLS).
- **Metadata API (`generateMetadata`)**: Defining static metadata objects or dynamically computing metadata based on route params and fetched data.
- **OpenGraph & Social Sharing**: Custom social preview cards (OG Images, Twitter Cards).
- **Automated SEO Files**: Programmatically generating `sitemap.ts` and `robots.ts` dynamically.
- **Semantic Accessibility**: Accessible HTML5 elements (`<main>`, `<section>`, `<article>`) and ARIA roles for screen reader compliance.

---

## 🛠️ Quickstart

To run any sub-project within this directory:

```bash
# Navigate to the target folder (e.g. 1-styling)
cd 1-styling

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the project in your browser.

---

*Part of the Next.js & Full-Stack Learning Path.*
