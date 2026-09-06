# 📝 TypeScript TodoApp — OOP & DOM Template Architecture

**TypeScript TodoApp** is a vanilla TypeScript application built with **Vite**. It demonstrates object-oriented programming (OOP) principles in TypeScript, including data models, singleton classes, interface contracts, DOM template rendering, and persistent storage using `localStorage`.

---

## 🏗️ Architecture & Folder Structure

```
1-TodoApp/
├── public/                  # Public static assets
├── src/
│   ├── model/               # Object-oriented data models
│   │   ├── ListItem.ts      # Model class representing individual task items
│   │   └── FullList.ts      # Singleton list manager handling CRUD & localStorage sync
│   ├── templates/           # DOM manipulation & template renderers
│   │   └── ListTemplate.ts  # Singleton class for dynamic DOM list rendering
│   ├── counter.ts           # Counter utility function
│   ├── main.ts              # Application initialization and event listeners
│   └── style.css            # Application styling rules
├── index.html               # Main HTML entry point with form controls
├── package.json             # Vite & TypeScript dependencies
└── tsconfig.json            # TypeScript compiler configuration
```

---

## ⚡ Tech Stack & Tools

| Technology | Purpose |
| :--- | :--- |
| **TypeScript 6** | Strongly-typed JavaScript with interfaces, classes, and generic types |
| **Vite 8** | Rapid frontend dev server and static bundle generator |
| **HTML5 / CSS3** | Structural forms and responsive UI styling |
| **LocalStorage API** | Browser client-side persistence |

---

## ✨ Key Features & TypeScript Design Patterns

1. **Class Models & Interfaces (`src/model/`)**:
   - `ListItem`: Class implementing `Item` interface with `id`, `item` string, and `checked` boolean state.
   - `FullList`: Singleton class implementing `List` interface managing `ListItem[]` state, load/save functions for `localStorage`.

2. **DOM Template Renderer (`src/templates/`)**:
   - `ListTemplate`: Singleton class handling dynamic creation of `<li>` elements, checkboxes, labels, and delete buttons.

3. **Event Driven Setup (`src/main.ts`)**:
   - Form submit listener capturing new todo items and triggering immediate UI re-rendering and storage persistence.

---

## 🚀 Quickstart Guide

### Prerequisites
- Node.js (v18 or higher)

### Installation & Execution

1. **Navigate to project directory**:
   ```bash
   cd Projects/FrontEnd/TypeScript/1-TodoApp
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start Development Server**:
   ```bash
   npm run dev
   ```

4. **Build TypeScript & Production Bundle**:
   ```bash
   npm run build
   ```

---

[← Back to TypeScript Projects Hub](../README.md)
