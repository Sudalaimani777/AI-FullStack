# ⚓ Essential React Hooks (`useState`, `useRef`, `useEffect`)

Welcome to **Essential React Hooks**, a deep-dive into state management, DOM refs, side-effects, API data fetching, and lifecycle cleanup functions in React 19.

---

## 📂 Module Architecture

```text
4-ReactHooks/
├── 📁 1-useState/                                   # Local state management & immutable state updates
│   ├── 📁 1-useStateHookIntroduction/           # useState syntax & triggering re-renders
│   ├── 📁 2-useStateHookPart2/                  # Functional updates & state batching
│   └── 📁 3-UpdatingObjectswithUseStateHook/    # Updating complex object & array states immutably
│
├── 📁 2-useRef/                                     # Persistent refs & DOM manipulation
│   ├── 📁 1-useRefHookIntro/                    # Storing mutable values across renders without re-rendering
│   └── 📁 2-DOMManipulationUsinguseRef/         # Direct DOM access & element referencing
│
└── 📁 3-useEffect/                                  # Side-effects, API calls & cleanup functions
    ├── 📁 1-useEffectIntroduction/              # Dependency arrays, mounting & data fetching
    └── 📁 2-cleanupFunction/                    # Event listener cleanup & unmount memory leak prevention
```

---

## 📚 Section Breakdown & Code Examples

### 🟢 1. The `useState` Hook (`1-useState`)
Manages component-local state. Updating state causes React to re-render the component.

```jsx
import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    // Functional update ensuring state batching safety
    const handleIncrement = () => {
        setCount(prevCount => prevCount + 1);
    };

    return (
        <button onClick={handleIncrement}>Count: {count}</button>
    );
}
```

#### Immutable Object & Array State Updates
Always create a new object or array copy when updating state:

```jsx
const [user, setUser] = useState({ name: "John", age: 25 });

// Correct immutable update using spread operator
setUser(prevUser => ({
    ...prevUser,
    age: 26
}));
```

---

### 🔵 2. The `useRef` Hook (`2-useRef`)
Returns a mutable ref object whose `.current` property is persisted across re-renders. **Mutating `.current` does NOT trigger a re-render.**

#### Common Use Cases:
1. **Accessing DOM Elements**:
   ```jsx
   import { useRef } from 'react';

   function TextInputWithFocusButton() {
       const inputEl = useRef(null);

       const onButtonClick = () => {
           inputEl.current.focus(); // Directly focus input DOM node
       };

       return (
           <>
               <input ref={inputEl} type="text" />
               <button onClick={onButtonClick}>Focus the input</button>
           </>
       );
   }
   ```
2. **Storing Mutable Values**: Tracking render counts or previous values without causing additional re-renders.

---

### 🟣 3. The `useEffect` Hook (`3-useEffect`)
Performs side effects in functional components (replaces class lifecycle methods: `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`).

```jsx
import { useState, useEffect } from 'react';

function DataFetcher() {
    const [data, setData] = useState(null);

    useEffect(() => {
        let isMounted = true;

        async function fetchData() {
            const response = await fetch('https://api.example.com/data');
            const result = await response.json();
            if (isMounted) setData(result);
        }

        fetchData();

        // Cleanup function executed on unmount or before re-running effect
        return () => {
            isMounted = false;
        };
    }, []); // Empty array = Runs ONCE on mount

    return <div>{data ? JSON.stringify(data) : 'Loading...'}</div>;
}
```

#### Dependency Array Behaviors

| Dependency Array Syntax | Execution Timing | Equivalent Lifecycle |
| :--- | :--- | :--- |
| `useEffect(() => {})` | Runs after **every** render | `componentDidUpdate` |
| `useEffect(() => {}, [])` | Runs **once** after initial mount | `componentDidMount` |
| `useEffect(() => {}, [value])` | Runs on mount and when `value` changes | Targeted update listener |

---

## 🛠️ Quickstart Guide

To run any hook demo project:

```bash
# Navigate to the target hook folder (e.g. 3-useEffect/1-useEffectIntroduction)
cd 3-useEffect/1-useEffectIntroduction

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

*Part of the React 19 Full-Stack Masterclass.*
