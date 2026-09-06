# 📝 React Modern Daily Planner & Todo Application

Welcome to the **React Modern Daily Planner & Todo Application**, a production-style task management workspace built with **React 19**, **Vite**, **Tailwind CSS v4**, and **UUID**.

---

## 📂 Repository Architecture

```text
7-TodoApp/
├── 📁 dist/                                         # Production build output
├── 📁 src/
│   ├── 📄 App.jsx                                   # Full Todo application with glassmorphic UI
│   ├── 📄 BlankVersionTodo.jsx                      # Minimalist unstyled Todo implementation reference
│   ├── 📄 main.jsx                                  # React DOM root renderer
│   ├── 📄 tailwind.css                              # Tailwind CSS v4 directives & custom themes
│   └── 📄 index.css                                 # Compiled Tailwind CSS output file
├── 📄 package.json                                  # App scripts & dependencies
├── 📄 vite.config.js                                # Vite bundler setup
└── 📄 index.html                                    # HTML entry point with custom Google Fonts
```

---

## 🚀 Key Features & Architectural Highlights

### 🛠️ Technical Capabilities

1. **Task Lifecycle Management**:
   - Adding tasks with unique identifiers via `uuid` (`v4`).
   - Toggling completion states (`isCompleted: boolean`).
   - Filtering and removing tasks from array state.

2. **Live Dynamic Date & Progress Analytics**:
   - Dynamic locale date formatting using `Intl.DateTimeFormat`:
     ```javascript
     const todayLabel = new Intl.DateTimeFormat("en-US", {
       weekday: "long",
       month: "long",
       day: "numeric",
     }).format(new Date());
     ```
   - Real-time active vs completed task counter calculations (`activeCount` & `completedCount`).

3. **Premium UI/UX Design**:
   - Styled with **Tailwind CSS v4** featuring custom color palettes (Wine, Gold, Ink).
   - Glassmorphic card containers with gradient blur background overlays.
   - Dual-column responsive dashboard layout for desktop and mobile viewports.

---

## 🛠️ Quickstart Guide

To run the Todo Application:

### 1. Install Dependencies
```bash
npm install
```

### 2. (Optional) Run Tailwind CSS Compiler
```bash
npm run tw:watch
```

### 3. Launch Development Server
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

*Part of the React Projects Suite.*
