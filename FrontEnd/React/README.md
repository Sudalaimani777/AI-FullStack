# ⚛️ React 19+ Masterclass Learning Hub

Welcome to the **React Masterclass Learning Hub**, an end-to-end curriculum for building modern, high-performance web applications using **React 19**, **Vite**, **React Hooks**, **React Router**, **Redux Toolkit**, and **Advanced Performance Optimization Patterns**.

---

## 📂 Repository Architecture

```text
React/
├── 📁 0-Start/                                      # React 19 + Vite Setup & Environment Configuration
├── 📁 1-AboutReact/                                 # Declarative UI vs Imperative DOM Fundamentals
├── 📁 2-JSXAndComponents/                           # Components, JSX Syntax, Props & Styling
├── 📁 3-FundamentalsOfReact/                        # Core React Patterns
│   ├── 📁 1-FunctionalComponent/                    # Pure Functional Components & Props Destructuring
│   └── 📁 2-RenderingListAndConditionalRendering/   # Array Mapping, Keys & Conditional Render Logic
├── 📁 4-ReactHooks/                                 # Essential State & Effect Hooks
│   ├── 📁 1-useState/                               # Local Component State & Batching
│   ├── 📁 2-useRef/                                 # Persistent Mutable Refs & DOM Access
│   └── 📁 3-useEffect/                              # Side Effects, Data Fetching & Subscriptions
├── 📁 5-AdvanceHooksAndNavigation/                  # State Management & Routing
│   ├── 📁 1-useReducer/                             # Complex State Logic & Action Dispatching
│   ├── 📁 2-useContext/                             # Context API & Prop-Drilling Elimination
│   └── 📁 3-ReactRouter/                            # Client-Side Routing (`react-router-dom`)
├── 📁 6-MasteringRedux/                             # Global State Management
│   ├── 📁 1-ReduxUnderstanding/                     # Redux Philosophy & Unidirectional Data Flow
│   ├── 📁 2-StoreAndReducer/                        # Redux Toolkit (`configureStore`, `createSlice`)
│   ├── 📁 3-TodoAppUsingRedux/                      # Full Redux Toolkit Todo Application
│   └── 📁 4-AsyncThunkRedux/                        # Asynchronous Middleware (`createAsyncThunk`)
└── 📁 7-ClassComponentsAndOptimization/            # Legacy Systems & Performance Optimization
    ├── 📁 1-ClassComponents/                        # Lifecycle Methods (`componentDidMount`, etc.)
    ├── 📁 2-HigherOrderComponent/                   # HOC Design Pattern
    └── 📁 3-PerformanceOptimizationHooks/           # `useMemo`, `useCallback` & `React.memo`
```

---

## 📚 Curriculum & Module Breakdowns

### 🟢 Module 0: React 19 + Vite Setup (`0-Start`)
- **React 19 & Vite 7**: Modern, ultra-fast development server with Hot Module Replacement (HMR).
- **JSX Compilation**: How JSX gets transformed into `React.createElement()` function calls.
- **Project Structure**: Understanding `main.jsx`, `App.jsx`, `index.html`, and static asset bundling.

---

### 🟢 Module 1: Core Philosophy (`1-AboutReact`)
- **Declarative UI**: Describing what the UI should look like based on state instead of manually querying and updating DOM elements.
- **Virtual DOM (VDOM)**: Diffing algorithm and efficient DOM updates via `react-dom`.

---

### 🟢 Module 2: JSX & Component Architecture (`2-JSXAndComponents`)
- **Functional Components**: Modular UI construction using modern ES6 functions.
- **Props & Component Composition**: Passing data down to child components, prop destructuring, and `children` props.
- **Styling**: Component-specific CSS, CSS Modules, and global styling.

---

### 🟡 Module 3: React Fundamentals (`3-FundamentalsOfReact`)
- **Functional Components (`1-FunctionalComponent`)**: Pure functions, immutability, default props.
- **List & Conditional Rendering (`2-RenderingListAndConditionalRendering`)**:
  - Mapping over data arrays with `.map()`.
  - Providing stable, unique `key` props to prevent reconciliation errors.
  - Ternary operators (`condition ? <A /> : <B />`) and short-circuit evaluation (`condition && <Component />`).

---

### 🟡 Module 4: Essential React Hooks (`4-ReactHooks`)
- **`useState` (`1-useState`)**:
  - Managing primitive and complex object state.
  - Functional updates (`setCount(prev => prev + 1)`) for state batching safety.
- **`useRef` (`2-useRef`)**:
  - Accessing DOM nodes (`ref.current.focus()`).
  - Storing persistent mutable variables without triggering component re-renders.
- **`useEffect` (`3-useEffect`)**:
  - Lifecycle management: Mounting, updating, and cleanup on unmount.
  - Dependency arrays `[]`, `[dep]`, and avoiding infinite re-render loops.
  - Asynchronous data fetching and cleanup timers/listeners.

---

### 🔵 Module 5: Advanced State & Navigation (`5-AdvanceHooksAndNavigation`)
- **`useReducer` (`1-useReducer`)**:
  - Reducer functions `(state, action) => newState`.
  - Managing complex state transitions and predictable state mutations.
- **`useContext` (`2-useContext`)**:
  - Creating global contexts (`createContext`).
  - Eliminating prop-drilling by consuming context values anywhere in the component tree.
- **React Router (`3-ReactRouter`)**:
  - SPA routing with `react-router-dom`.
  - Defining routes with `<Routes>`, `<Route path="..." element={<Comp />} />`.
  - Programmatic navigation (`useNavigate`) and URL route parameters (`useParams`).

---

### 🔴 Module 6: Mastering Redux Toolkit (`6-MasteringRedux`)
- **Redux Core Philosophy (`1-ReduxUnderstanding`)**: Single source of truth, read-only state, changes via pure reducer functions.
- **Redux Toolkit (`2-StoreAndReducer`)**: Setting up `configureStore` and slices with `createSlice` powered by Immer.js for direct immutable mutations.
- **Todo App Project (`3-TodoAppUsingRedux`)**: Practical implementation of Redux Toolkit state slices, dispatching actions (`useDispatch`), and selecting state (`useSelector`).
- **Async Thunks (`4-AsyncThunkRedux`)**: Handling asynchronous API requests with `createAsyncThunk` and `extraReducers` (`pending`, `fulfilled`, `rejected`).

---

### 🔴 Module 7: Class Components & Optimization (`7-ClassComponentsAndOptimization`)
- **Class Components (`1-ClassComponents`)**: ES6 Class syntax, `this.state`, and lifecycle methods (`componentDidMount`, `componentDidUpdate`, `componentWillUnmount`).
- **Higher-Order Components (`2-HigherOrderComponent`)**: Reusing component logic by wrapping components with HOC functions.
- **Performance Optimization (`3-PerformanceOptimizationHooks`)**:
  - **`React.memo`**: Preventing unnecessary child component re-renders when props haven't changed.
  - **`useMemo`**: Caching expensive calculations across renders.
  - **`useCallback`**: Memoizing callback functions to preserve reference equality.

---

## 🛠️ Quickstart Guide

To start any project module:

```bash
# Navigate to the target directory (e.g. 6-MasteringRedux/3-TodoAppUsingRedux)
cd 6-MasteringRedux/3-TodoAppUsingRedux

# Install dependencies
npm install

# Start Vite development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📊 Module Summary Table

| Module | Topic | Stack / Tools |
| :--- | :--- | :--- |
| **`0-Start`** | React 19 Setup & Vite | React 19, Vite, ESLint |
| **`1-AboutReact`** | Virtual DOM & Principles | Declarative UI, Reconciliation |
| **`2-JSXAndComponents`** | Components & Props | JSX, Component Composition |
| **`3-FundamentalsOfReact`** | Lists & Conditionals | `.map()`, `key` prop, Ternaries |
| **`4-ReactHooks`** | Essential Hooks | `useState`, `useRef`, `useEffect` |
| **`5-AdvanceHooksAndNavigation`**| Reducers, Context & Router | `useReducer`, `useContext`, `react-router-dom` |
| **`6-MasteringRedux`** | Global State Management | Redux Toolkit, `createAsyncThunk`, Immer |
| **`7-ClassComponentsAndOptimization`** | Legacy & Optimization | Class Lifecycles, HOC, `useMemo`, `useCallback` |

---

*Part of the Full-Stack Engineering Learning Path.*
