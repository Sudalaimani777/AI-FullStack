# ⚛️ React Tasks & Hands-On Practice Labs

Welcome to the **React Tasks & Hands-On Practice Labs** directory within the **AI-FullStack** repository. This folder contains a structured learning progression of 8 practical task modules and lab suites covering **React 19**, **Vite**, **JSX Syntax**, **Components & Props**, **useState & State Management**, **Side Effects (useEffect)**, **Complex Reducers & Context API (useReducer, useContext)**, and **Full Authentication User Flow Routing**.

---

## 📂 Architecture & Folder Structure

```text
Tasks/FrontEnd/React/
├── 📁 0-TryLoLearn/                    # Initial React 19 environment & JSX syntax playground
├── 📁 1-ComponentsAndProps/            # Modular React components, props passing & list mapping
├── 📁 2-PassignProps/                  # Reusable contact card components & prop destructuring
├── 📁 3-UseState/                      # Comprehensive useState lab suite
│   ├── 📁 1-SimpleToggleApp/           # Boolean state toggling
│   ├── 📁 2-ComplexStateArray/         # Immutable array state updates
│   ├── 📁 3-ComplexStateObject/        # Immutable object state updates
│   ├── 📁 4-Form/                      # Controlled form input handling
│   ├── 📁 5-BrandFilter/               # Live filtering based on user input
│   └── 📁 6-AddToCart/                 # E-commerce cart state counter
├── 📁 4-StateAndProps/                 # Interactive SoundPads project (State uplifting & prop toggles)
├── 📁 5-UseEffect/                     # WindowTracker application (Side-effects, resize listeners & cleanups)
├── 📁 6-useReducerAnduseContext/       # Global state management using useReducer & useContext (Counter App)
└── 📁 7-UserLoginAndRegistration/      # Full Authentication UI layout with Context & React Router
```

---

## ⚡ Tech Stack & Core Libraries

| Technology | Purpose |
| :--- | :--- |
| **React 19** | Modern UI library with latest hooks, automatic batching & functional components |
| **Vite 8** | High-performance frontend build tool and hot-reloading development server |
| **JavaScript (ES6+)** | Modern ES syntax, arrow functions, destructuring & array methods (`map`, `filter`) |
| **React Hooks** | Core hooks suite: `useState`, `useEffect`, `useReducer`, `useContext` |
| **Tailwind CSS / Vanilla CSS** | Responsive styling, grid layouts & interactive UI states |

---

## 📅 Daily Tasks & Learning Objectives

### 🟢 Task 0: TryToLearn — Environment & JSX Playground
- **Focus**: Initializing React 19 with Vite, exploring JSX elements, embedding expressions, and basic element rendering.

### 🟢 Task 1: Components & Props
- **Focus**: Building reusable UI components, passing primitive props, rendering lists from dynamic arrays using `.map()`, and assigning key props.

### 🟢 Task 2: Passing Props & Destructuring
- **Focus**: Building reusable card structures (`Contact.jsx`), prop destructuring, passing image paths, and rendering structured data grids.

### 🟡 Task 3: UseState Lab Suite
- **Focus**: Comprehensive state manipulation across 6 dedicated sub-apps:
  1. `1-SimpleToggleApp`: Toggling state booleans (Read/Unread, Show/Hide).
  2. `2-ComplexStateArray`: Adding items immutably to array states.
  3. `3-ComplexStateObject`: Updating nested object fields without mutating original state.
  4. `4-Form`: Controlled form components managing input values.
  5. `5-BrandFilter`: Real-time list filtering based on state search inputs.
  6. `6-AddToCart`: Managing product quantities and shopping cart counters.

### 🟡 Task 4: State & Props Integration (SoundPads)
- **Focus**: Combining state uplifting with props.
- **Key Concepts**: Uplifting state to parent container, passing state setters down as props, dynamic sound pad button active toggles.

### 🔵 Task 5: UseEffect & WindowTracker
- **Focus**: Managing component lifecycle and side effects with `useEffect`.
- **Key Concepts**: Event listeners (`window.addEventListener("resize")`), API side-effect execution, memory leak prevention via cleanup functions (`removeEventListener`).

### 🔵 Task 6: useReducer & useContext Architecture
- **Focus**: Managing complex or centralized state transitions.
- **Key Concepts**: Dispatching actions to a reducer function (`useReducer`), decoupling state from component hierarchy using `useContext` for global counter management.

### 🔴 Task 7: User Login & Registration Auth Flow
- **Focus**: Building complete authentication interfaces.
- **Key Concepts**: User registration forms, login view pages, authentication context state provider, and client-side page routing.

---

## 🚀 Quickstart Execution Guide

To run any individual task app (e.g., **3-UseState/1-SimpleToggleApp**):

1. **Navigate to the target task directory**:
   ```bash
   cd Tasks/FrontEnd/React/3-UseState/1-SimpleToggleApp
   ```

2. **Install project dependencies**:
   ```bash
   npm install
   ```

3. **Start the Development Server**:
   ```bash
   npm run dev
   ```

4. **Build for Production**:
   ```bash
   npm run build
   ```

---

[← Back to FrontEnd Tasks Hub](../README.md)
