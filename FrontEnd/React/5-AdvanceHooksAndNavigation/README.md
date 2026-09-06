# 🚀 Advanced React Hooks & Client-Side Navigation

Welcome to **Advanced React Hooks & Navigation**, a comprehensive guide to mastering `useReducer`, `useContext`, prop-drilling elimination, state management architectures, and `react-router-dom` client-side navigation.

---

## 📂 Module Architecture

```text
5-AdvanceHooksAndNavigation/
├── 📁 1-useReducer/                                 # Structured state logic & Reducer action dispatching
│   ├── 📁 Part-1/                                   # Basic useReducer syntax & counter reducers
│   └── 📁 Part-2/                                   # Complex object state transitions & action payloads
│
├── 📁 2-useContext/                                 # Global context & prop-drilling resolution
│   ├── 📁 1-PropDrilling/                           # Demonstrating intermediate prop-drilling pitfalls
│   ├── 📁 2-useContextHookPart1/                    # createContext, Context.Provider & useContext
│   └── 📁 3-useReducerAndUseContext/                # Combining useReducer + useContext for lightweight global state
│
└── 📁 3-ReactRouter/                                # SPA routing with react-router-dom
    ├── 📁 1-RoutingAndSPA/                          # BrowserRouter, Routes, Route & Link
    ├── 📁 2-NavLinkAndProgramaticallyRouting/       # Active links & programmatic useNavigate()
    ├── 📁 3-ProtectedRoutes/                        # Authentication wrapper routes & authorization checks
    └── 📁 4-useParamsHook/                          # Dynamic URL parameters & route segment extraction
```

---

## 📚 Core Topics & Code Examples

### 🟢 1. Complex State with `useReducer` (`1-useReducer`)
`useReducer` is preferred over `useState` when state logic is complex, involves multiple sub-values, or when next state depends on previous state.

#### Mental Model:
- **`useState`**: *"Set the value directly"*
- **`useReducer`**: *"Describe what happened (Action) and let the reducer rule decide the new state"*

```jsx
import { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'reset':
            return { count: 0 };
        default:
            throw new Error(`Unhandled action type: ${action.type}`);
    }
}

function Counter() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
    );
}
```

---

### 🔵 2. Context API & Prop-Drilling Resolution (`2-useContext`)
The Context API provides a way to pass data through the component tree without having to pass props down manually at every level (eliminating **Prop-Drilling**).

```jsx
import { createContext, useContext, useState } from 'react';

// 1. Create Context
const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('dark');

    const toggleTheme = () => {
        setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

// 2. Consume Context in any deep child component
export function ThemeToggleButton() {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button onClick={toggleTheme}>
            Current Theme: {theme}
        </button>
    );
}
```

#### Combining `useReducer` + `useContext`
By wrapping a `useReducer` dispatch function inside a Context Provider, deep child components can dispatch actions globally without prop-drilling or external libraries.

---

### 🟣 3. Client-Side SPA Routing (`3-ReactRouter`)
Next-generation single-page navigation using `react-router-dom`.

#### Basic Routes & Links (`1-RoutingAndSPA`)
```jsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </nav>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}
```

#### Programmatic Navigation (`2-NavLinkAndProgramaticallyRouting`)
```jsx
import { useNavigate } from 'react-router-dom';

function LoginButton() {
    const navigate = useNavigate();

    const handleLogin = async () => {
        // Authenticate user...
        navigate('/dashboard'); // Programmatically redirect
    };

    return <button onClick={handleLogin}>Log In</button>;
}
```

#### Dynamic URL Parameters (`4-useParamsHook`)
```jsx
import { useParams } from 'react-router-dom';

// Route path: "/user/:userId"
function UserProfile() {
    const { userId } = useParams();
    return <h2>Viewing Profile for User ID: {userId}</h2>;
}
```

#### Protected Routes Wrapper (`3-ProtectedRoutes`)
```jsx
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ isAuthenticated, children }) {
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }
    return children;
}
```

---

## 🛠️ Quickstart Guide

To run any sub-project:

```bash
# Navigate to the target folder (e.g. 3-ReactRouter/1-RoutingAndSPA)
cd 3-ReactRouter/1-RoutingAndSPA

# Install dependencies (including react-router-dom)
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

*Part of the React 19 Full-Stack Masterclass.*
