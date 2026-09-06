# ⚡ Class Components & Performance Optimization

Welcome to **Class Components & Performance Optimization**, a specialized module covering legacy Class Component lifecycles, Higher-Order Components (HOC), and React performance optimization techniques using `useCallback`, `useMemo`, and `React.memo`.

---

## 📂 Module Architecture

```text
7-ClassComponentsAndOptimization/
├── 📁 1-ClassComponents/                        # ES6 Class components, state & lifecycle methods
├── 📁 2-HigherOrderComponent/                   # Higher-Order Component (HOC) design pattern
└── 📁 3-PerformanceOptimizationHooks/           # Performance optimization with useCallback & useMemo
    └── 📁 1-useCallbackHook/                    # Preserving function reference equality across renders
```

---

## 📚 Section Breakdown & Key Concepts

### 🟢 1. Legacy Class Components (`1-ClassComponents`)
Before React 16.8 Hooks, state and lifecycle methods were only available inside ES6 Class components.

```jsx
import React, { Component } from 'react';

class UserCounter extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    componentDidMount() {
        console.log('Component mounted on DOM');
    }

    componentWillUnmount() {
        console.log('Cleaning up resources before unmount');
    }

    increment = () => {
        this.setState(prevState => ({ count: prevState.count + 1 }));
    };

    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}

export default UserCounter;
```

---

### 🔵 2. Higher-Order Components (HOC) (`2-HigherOrderComponent`)
An HOC is an advanced pattern in React for reusing component logic. It is a pure function that takes a component as an argument and returns a new enhanced component.

```jsx
// Higher-Order Component pattern
function withLogger(WrappedComponent) {
    return function LoggingComponent(props) {
        console.log('Props passed to component:', props);
        return <WrappedComponent {...props} />;
    };
}

export default withLogger;
```

---

### 🟣 3. Performance Optimization Hooks (`3-PerformanceOptimizationHooks`)
Optimizing rendering efficiency and preventing unnecessary component re-renders.

#### The `useCallback` Hook (`1-useCallbackHook`)
`useCallback` returns a memoized version of a callback function that only changes if one of the dependencies has changed.

##### Problem: Function Re-creation Without `useCallback`
On every re-render of a component, inline functions are recreated with new memory references, causing child components wrapped in `React.memo` to re-render unnecessarily:

```jsx
import { useState, useCallback } from 'react';

function ParentComponent() {
    const [count, setCount] = useState(0);
    const [num, setNum] = useState(0);

    // Memoized callback function preserving reference equality
    const incrementCount = useCallback(() => {
        setCount(prev => prev + 1);
    }, []); // Empty dependency array = Stable reference across renders

    return (
        <div>
            <ChildComponent onClick={incrementCount} />
            <button onClick={() => setNum(n => n + 1)}>Update Number: {num}</button>
        </div>
    );
}
```

#### Comparison: `useCallback` vs. `useMemo`

| Feature | `useCallback` | `useMemo` |
| :--- | :--- | :--- |
| **Returns** | A memoized **function reference** | A memoized **calculated value** |
| **Syntax** | `useCallback(() => fn, [deps])` | `useMemo(() => compute(), [deps])` |
| **Primary Use Case** | Preventing child re-renders due to new function instances | Caching expensive, resource-heavy calculations |

---

## 🛠️ Quickstart Guide

To run any sub-project:

```bash
# Navigate to the target project directory (e.g. 3-PerformanceOptimizationHooks/1-useCallbackHook)
cd 3-PerformanceOptimizationHooks/1-useCallbackHook

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

*Part of the React 19 Full-Stack Masterclass.*
