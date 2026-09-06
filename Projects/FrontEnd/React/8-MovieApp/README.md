# 🎬 React Movie Explorer & Streaming Application

Welcome to the **React Movie Explorer & Streaming Application**, a modern cinema discovery platform built with **React 19**, **Vite**, **Redux Toolkit**, **Material-UI (MUI v9)**, **Tailwind CSS v4**, **Axios**, and **React Router (v7)**.

---

## 📂 Repository Architecture

```text
8-MovieApp/
├── 📁 src/
│   ├── 📁 api/                                      # Axios API client & OMDB/TMDB endpoints
│   ├── 📁 Components/                               # Reusable UI components
│   │   ├── 📁 MovieCard/                            # MUI Card component for displaying poster, rating & release date
│   │   ├── 📁 Navbar/                               # Header navigation bar with live search input
│   │   └── 📁 SelectorComponent/                    # Genre & sorting filter dropdowns
│   ├── 📁 Pages/                                    # SPA Page views (Home grid view)
│   ├── 📁 Routing/                                  # React Router route definitions
│   ├── 📁 Slices/                                   # Redux Toolkit state slices (movieSlice.js)
│   ├── 📁 Store/                                    # Global Redux store (configureStore)
│   ├── 📁 utils/                                    # Utility helpers & Lodash formatters
│   ├── 📄 App.jsx                                   # Root layout & route container
│   ├── 📄 main.jsx                                  # Entry point wrapping Provider & BrowserRouter
│   ├── 📄 App.css                                   # Movie card custom hover animations
│   └── 📄 index.css                                 # Tailwind CSS v4 setup
├── 📄 package.json                                  # App dependencies & scripts
└── 📄 vite.config.js                                # Vite bundler configuration
```

---

## 🚀 Application Features & Core Architecture

### 🛠️ Technical Stack & Highlights

1. **Redux Toolkit Global State (`movieSlice.js`)**:
   - Manages movie catalog data, search queries, selected categories, and active filters.
   - Preserves state across navigation without re-fetching identical movie records.

2. **Material-UI (MUI v9) & Tailwind CSS v4 Styling**:
   - Built using `@mui/material` components, `@mui/icons-material`, and `@emotion/styled`.
   - Grid layout and responsive typography styled with **Tailwind CSS v4** (`@tailwindcss/vite`).

3. **Asynchronous Movie Data Fetching (`axios`)**:
   - Asynchronous API requests fetching movie posters, ratings, plot summaries, and cast information.
   - Error handling and loading skeletons for seamless user feedback.

4. **Live Search & Filtering**:
   - Search bar input filtered dynamically using **Lodash** debouncing to prevent excessive API calls.

---

## 🛠️ Quickstart Guide

To run the Movie Application:

```bash
# Navigate to the project directory
cd 8-MovieApp

# Install dependencies
npm install

# Start Vite development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to launch the Movie Explorer.

---

*Part of the React Projects Suite.*
