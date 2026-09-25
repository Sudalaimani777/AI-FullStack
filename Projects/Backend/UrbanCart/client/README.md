# 🛍️ UrbanCart Client - Frontend Web Application

Welcome to the **UrbanCart Frontend**, a high-performance, responsive e-commerce web application built using **React 19**, **TypeScript**, **Vite**, **Tailwind CSS (v4)**, **Zustand**, and **Firebase Authentication**.

UrbanCart delivers a modern shopping experience with seamless client-side routing, protected route guards, centralized state persistence, and robust server session synchronization.

---

## 📂 Directory Architecture

```text
client/
├── 📁 src/
│   ├── 📁 api/                                  # Axios HTTP client & response interceptors
│   │   └── 📄 axios.ts                          # Pre-configured instance (credentials, baseURL)
│   ├── 📁 assets/                               # Static imagery, icons, and media
│   ├── 📁 components/                           # Modular UI components
│   │   ├── 📁 admin/                            # Admin dashboard controls & widgets
│   │   ├── 📁 layout/                           # Layout wrappers (Navbar, Shell)
│   │   ├── 📁 login/                            # Login form, hero banner, social auth buttons
│   │   ├── 📁 navbar/                           # Responsive desktop & mobile navigation bars
│   │   ├── 📁 profile/                          # User profile cards (personal, address, security)
│   │   └── 📁 register/                         # Registration form, editorial panels
│   ├── 📁 config/                               # Third-party SDK configurations
│   │   └── 📄 firebase.ts                       # Firebase app initialization & Google Auth provider
│   ├── 📁 pages/                                # Top-level page views (Home, Cart, Profile, Admin, etc.)
│   ├── 📁 routes/                               # Application routing & navigation guards
│   │   ├── 📁 guards/                           # Route protectors (AdminRoute, GuestRoute, ProtectedRoute)
│   │   └── 📄 AppRoutes.tsx                     # React Router DOM route hierarchy definitions
│   ├── 📁 schemas/                              # Zod schemas for client-side form validation
│   │   ├── 📄 auth.schema.ts                    # Login & registration validation rules
│   │   └── 📄 product.schema.ts                 # Product creation & update validation rules
│   ├── 📁 store/                                # Zustand global state stores
│   │   ├── 📄 useAuthStore.ts                   # User authentication & session state
│   │   └── 📄 useCartStore.ts                   # Persistent shopping cart state with local storage
│   ├── 📁 types/                                # TypeScript data models & type definitions
│   ├── 📄 App.tsx                               # Root component with providers
│   ├── 📄 index.css                             # Tailwind CSS v4 directives & custom themes
│   └── 📄 main.tsx                              # Application entry point & React DOM bootstrap
├── 📄 .env.example                              # Environment variable configuration template
├── 📄 package.json                              # Project dependencies, scripts, and engine info
├── 📄 tsconfig.json                             # TypeScript compiler configuration
└── 📄 vite.config.ts                            # Vite bundler & Tailwind CSS plugin settings
```

---

## ⚡ Technology Stack

- **Core Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool & Bundler**: [Vite 8](https://vite.dev/) with Hot Module Replacement (HMR)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/vite`
- **Routing**: [React Router DOM v7](https://reactrouter.com/) with declarative route guards
- **State Management**: [Zustand v5](https://github.com/pmndrs/zustand) (with `persist` middleware for the cart)
- **Data Fetching**: [Axios](https://axios-http.com/) & [@tanstack/react-query](https://tanstack.com/query)
- **Form Management & Validation**: [React Hook Form](https://react-hook-form.com/) + [Zod v4](https://zod.dev/) + `@hookform/resolvers`
- **Authentication**: [Firebase v12](https://firebase.google.com/) (Google OAuth popup) & Cookie-based JWT Session
- **Icons**: [Lucide React](https://lucide.dev/)
- **Linter**: [Oxlint](https://oxc.rs/docs/guide/usage/linter)

---

## ✨ Key Features & Capabilities

### 1. 🔐 Robust Authentication & Role Protection
- **Multi-method Auth**: Supports standard email/password credentials alongside one-click Google OAuth via Firebase.
- **Route Guards**:
  - `ProtectedRoute`: Prevents unauthorized visitors from accessing user pages (Cart, Profile, Settings).
  - `GuestRoute`: Redirects already authenticated users away from `/signin` and `/signup`.
  - `AdminRoute`: Restricts access to administrative endpoints (`/admin`) exclusively to users with `is_admin: true`.
- **Session Persistence**: Automatic auth state verification via `/api/auth/profile` and centralized 401 interception in Axios.

### 2. 🛒 Persistent Shopping Cart
- Built with Zustand's `persist` middleware to ensure cart state survives browser refreshes.
- Real-time cart calculations (total items count, subtotal amounts).
- Granular quantity increments, decrements, and item removals.

### 3. 👤 Modular User Profile Management
- Comprehensive profile dashboard divided into focused component sections:
  - Personal Information & Display Names
  - Contact Details
  - Shipping Addresses
  - Account Preferences & Security Settings

### 4. 🎨 Responsive & Editorial UI Design
- Crafted using Tailwind CSS v4 for clean, high-fidelity layouts across mobile, tablet, and desktop screens.
- Split-screen editorial auth views with hero banners and micro-interactions.

---

## 🔗 Route Hierarchy

| Route Path | View Component | Access Level | Description |
| :--- | :--- | :---: | :--- |
| `/` | `HomePage` | Public | Storefront landing page and product catalog |
| `/signin` | `SigninPage` | Guest Only | User sign-in (redirects to home if logged in) |
| `/signup` | `SignupPage` | Guest Only | User registration (redirects to home if logged in) |
| `/cart` | `CartPage` | Authenticated | Shopping cart and checkout summary |
| `/profile` | `ProfilePage` | Authenticated | User account details, addresses, and settings |
| `/admin` | `AdminDashboardPage` | Admin Only | Administrative management dashboard |
| `*` | Catch-All Redirect | Public | Redirects unhandled routes back to `/` |

---

## ⚙️ Environment Variables

Create a `.env` file in the `client/` root directory based on `.env.example`:

```env
# Backend REST API Endpoint
VITE_API_URL="http://localhost:5000/api"

# Firebase Authentication Credentials (Google OAuth)
VITE_FIREBASE_API_KEY="your_firebase_api_key"
VITE_FIREBASE_AUTH_DOMAIN="your_project.firebaseapp.com"
VITE_FIREBASE_PROJECT_ID="your_firebase_project_id"
VITE_FIREBASE_STORAGE_BUCKET="your_firebase_storage_bucket"
VITE_FIREBASE_MESSAGING_SENDER_ID="your_messaging_sender_id"
VITE_FIREBASE_APP_ID="your_firebase_app_id"
VITE_FIREBASE_MEASUREMENT_ID="your_measurement_id"
```

---

## 🛠️ Getting Started

### 1. Install Dependencies
Navigate to the `client/` directory and install packages:
```bash
cd client
npm install
```

### 2. Configure Environment
Ensure your `.env` file is properly populated with the backend API URL and Firebase configuration keys.

### 3. Launch the Development Server
```bash
npm run dev
```
The application will launch on [http://localhost:5173](http://localhost:5173) with Vite Hot Module Replacement (HMR).

---

## 📜 Available NPM Scripts

| Script | Command | Description |
| :--- | :--- | :--- |
| `npm run dev` | `vite` | Starts the Vite local development server |
| `npm run build` | `tsc -b && vite build` | Type-checks and builds optimized static assets for production |
| `npm run lint` | `oxlint` | Runs fast Oxlint checks across the codebase |
| `npm run preview` | `vite preview` | Previews the production build locally |

---

*Part of the UrbanCart Full-Stack E-Commerce Project.*
