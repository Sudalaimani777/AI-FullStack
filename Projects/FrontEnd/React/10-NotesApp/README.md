# 📝 NotesApp — Workspace Notes & Organization Tool

**NotesApp** is a feature-rich, modular note-taking web application built with **React 19**, **Redux Toolkit / Context Reducers**, **React Router 7**, and **Tailwind CSS v4**. It features a modern desktop layout with sidebar navigation, note categorization (Archive, Important, Bin/Trash), rich card previews, note creation forms, and persistent note state handling.

---

## 🏗️ Architecture & Folder Structure

```
10-NotesApp/
├── public/                  # Static assets
├── src/
│   ├── assets/              # Icons and imagery assets
│   ├── components/          # Layout & functional components
│   │   ├── AppLayout.jsx    # Shared page layout wrapper (Header + Sidebar + Main)
│   │   ├── Navbar.jsx       # Top navigation header bar
│   │   ├── NotesCard.jsx    # Individual note display card with actions
│   │   ├── NotesForm.jsx    # Note creation form component (Title & Text inputs)
│   │   ├── Sidebar.jsx      # Left-hand navigation bar (Home, Important, Archive, Bin)
│   │   └── index.jsx        # Component barrel exports
│   ├── context/             # React Context definitions
│   │   └── NotesContext.jsx # Global notes state context provider
│   ├── pages/               # Views / Page components
│   │   ├── Archive.jsx      # Archived notes management page
│   │   ├── Bin.jsx          # Deleted notes / recycle bin view
│   │   ├── Home.jsx         # Main notes creation and grid view
│   │   ├── Important.jsx    # Starred / Important notes page
│   │   └── index.jsx        # Pages barrel export file
│   ├── reducers/            # Redux/Reducer functions
│   │   └── notesReducer.js  # State reducer handling TITLE, TEXT, and ADD_NOTE actions
│   ├── routes/              # Client-side routing configuration
│   │   └── AppRoutes.jsx    # React Router DOM 7 layout route definitions
│   ├── App.css              # Custom styles
│   ├── App.jsx              # Core root application component
│   ├── index.css            # Tailwind CSS directives
│   └── main.jsx             # React DOM entry point wrapped in BrowserRouter & Providers
├── index.html               # Vite HTML template
├── package.json             # Project dependencies & scripts
└── vite.config.js           # Vite build configuration
```

---

## ⚡ Tech Stack & Tools

| Technology | Purpose |
| :--- | :--- |
| **React 19** | Core UI library powering modular UI state & rendering |
| **Vite 8** | Rapid development build tool and dev server |
| **Tailwind CSS v4** | Utility-first styling framework for UI layout and responsiveness |
| **Redux Toolkit & React-Redux** | Centralized predictable state management |
| **React Router DOM 7** | Client-side routing with nested layout routes (`AppLayout`) |
| **React Icons** | Icon library for sidebar actions, pinning, archiving, and deletion |
| **UUID (v14)** | Unique identifier generator for note entries |

---

## ✨ Key Features

1. **Note Creation & Editing**:
   - Dynamic form input (`NotesForm`) for adding custom titled notes with rich body text.
   - Automatic unique ID assignment using `uuid`.

2. **Categorized Navigation Sidebar**:
   - **Home (`/`)**: All active notes and note creation interface.
   - **Important (`/important`)**: Quick access to pinned / starred notes.
   - **Archive (`/archive`)**: Archived notes storage view.
   - **Bin (`/bin`)**: Recycle bin view for deleted notes.

3. **Card Management (`NotesCard`)**:
   - Displays title, note body text, timestamp, and quick action buttons for pinning, archiving, and moving to trash.

---

## 🚀 Quickstart Guide

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation & Execution

1. **Navigate to project directory**:
   ```bash
   cd Projects/FrontEnd/React/10-NotesApp
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start Development Server**:
   ```bash
   npm run dev
   ```

4. **Build for Production**:
   ```bash
   npm run build
   ```

---

[← Back to React Projects Hub](../README.md)
