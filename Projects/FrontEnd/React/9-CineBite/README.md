# 🍿 CineBite — Movie Discovery & Exploration App

**CineBite** is a modern, responsive React 19 movie web application powered by **Vite**, **Tailwind CSS v4**, and the **TMDB (The Movie Database) API**. It allows film enthusiasts to explore currently playing, popular, top-rated, and upcoming movies, view detailed movie metrics (overview, cast, ratings, runtime, release date), and perform live movie searches.

---

## 🏗️ Architecture & Folder Structure

```
9-CineBite/
├── public/                  # Static public assets
├── src/
│   ├── Components/          # Reusable UI components
│   │   ├── Footer.jsx       # Page footer with navigation & copyright
│   │   ├── Header.jsx       # Navigation bar & search bar toggle
│   │   └── MovieCard.jsx    # Card component displaying movie poster, title, rating & overview
│   ├── Hooks/               # Custom React hooks
│   │   └── useFetch.jsx     # Reusable TMDB API data fetcher hook
│   ├── Pages/               # View page components
│   │   ├── MovieDetails.jsx # Detailed view of single movie with ratings, budget & info
│   │   ├── MovieList.jsx    # Grid display of movies filtered by category
│   │   ├── PageNotFound.jsx # 404 fallback page with user action options
│   │   ├── Search.jsx       # Search results page component
│   │   └── index.jsx        # Barrel export file for Pages
│   ├── Routes/              # Route definitions
│   │   └── AllRoutes.jsx    # React Router DOM route mappings
│   ├── Utils/               # Helper utilities & configuration constants
│   │   └── Options.jsx      # TMDB API headers & fetch options
│   ├── App.css              # Custom styling rules
│   ├── App.jsx              # Main App component shell
│   ├── index.css            # Tailwind CSS directives
│   └── main.jsx             # React entry point with BrowserRouter
├── .env                     # Environment variables (TMDB API Key & Access Tokens)
├── index.html               # Vite HTML entry point
├── package.json             # Dependencies & script configurations
└── vite.config.js           # Vite build & plugin configurations
```

---

## ⚡ Tech Stack & Tools

| Technology | Purpose |
| :--- | :--- |
| **React 19** | Modern UI rendering library with latest hook features |
| **Vite 8** | High-performance frontend build tool and dev server |
| **Tailwind CSS v4** | Utility-first CSS framework for responsive layout & styling |
| **React Router DOM 7** | Client-side routing and URL parameter management |
| **TMDB API** | External REST API source for movie data, posters, and metadata |

---

## ✨ Key Features

1. **Category Navigation**:
   - **Now Playing**: Highlights movies currently showing in theaters (`/`).
   - **Popular**: Displays trending movies worldwide (`/movie/popular`).
   - **Top Rated**: Ranks top-rated films by audience scores (`/movie/top`).
   - **Upcoming**: Previews upcoming theatrical releases (`/movie/upcoming`).

2. **Movie Detail Pages (`/movie/:id`)**:
   - Displays high-resolution movie backdrops and posters.
   - Summarizes plot overview, runtime, genres, release date, revenue, budget, and IMDb links.

3. **Search & Discovery (`/search`)**:
   - Live query searching against TMDB catalog endpoints.

4. **Custom API Hook (`useFetch`)**:
   - Encapsulates async fetching state (data, loading, error handling) with URL/query parameter dependency tracking.

---

## 🚀 Quickstart Guide

### Prerequisites
- Node.js (v18 or higher recommended)
- TMDB API Account Key / Access Token

### Installation & Execution

1. **Navigate to project directory**:
   ```bash
   cd Projects/FrontEnd/React/9-CineBite
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables**:
   Ensure `.env` contains valid TMDB API credentials:
   ```env
   API_ACCESS_TOKEN = <YOUR_TMDB_ACCESS_TOKEN>
   API_KEY = <YOUR_TMDB_API_KEY>
   ```

4. **Start Development Server**:
   ```bash
   npm run dev
   ```

5. **Build for Production**:
   ```bash
   npm run build
   ```

---

[← Back to React Projects Hub](../README.md)
