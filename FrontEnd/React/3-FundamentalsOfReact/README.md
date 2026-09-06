# ⚡ Fundamentals of React

Welcome to **Fundamentals of React**, a core module covering functional component patterns, dynamic list rendering using `.map()`, unique `key` reconciliation props, and conditional rendering techniques.

---

## 📂 Module Architecture

```text
3-FundamentalsOfReact/
├── 📁 1-FunctionalComponent/                    # Pure functional component structures & prop handling
└── 📁 2-RenderingListAndConditionalRendering/   # Array mapping, unique keys, and conditional UI logic
```

---

## 📚 Core Concepts & Code Patterns

### 🟢 1. Functional Components (`1-FunctionalComponent`)
Functional components are pure JavaScript functions that receive props as an input argument and return React UI elements (JSX).

```jsx
// Pure Functional Component with Destructured Props
function UserProfile({ name, role, isOnline }) {
    return (
        <div className="user-card">
            <h2>{name}</h2>
            <p>Role: {role}</p>
            <span>Status: {isOnline ? '🟢 Online' : '🔴 Offline'}</span>
        </div>
    );
}

export default UserProfile;
```

---

### 🔵 2. Conditional Rendering (`2-RenderingListAndConditionalRendering`)
Conditional rendering in React allows components to dynamically render different UI layouts based on component state or prop conditions.

#### Ternary Operator (`condition ? <A /> : <B />`)
Used for binary branching logic:

```jsx
function Header({ isAdmin }) {
    return (
        <header>
            {isAdmin ? <h1>Welcome Admin</h1> : <h1>Welcome User</h1>}
        </header>
    );
}
```

#### Logical AND Operator (`condition && <A />`)
Used to conditionally render an element only when the condition evaluates to `true`:

```jsx
function NotificationBanner({ message }) {
    return (
        <div>
            {message && <div className="alert">{message}</div>}
        </div>
    );
}
```

---

### 🟣 3. Rendering Lists & Key Reconciliation (`2-RenderingListAndConditionalRendering`)
React relies on the Array `.map()` method to iterate over data collections and transform each data object into a JSX element.

```jsx
function ProductList() {
    const products = [
        { id: 1, name: 'Laptop', price: 1000 },
        { id: 2, name: 'Phone', price: 500 },
        { id: 3, name: 'Tablet', price: 300 },
        { id: 4, name: 'Headphones', price: 200 }
    ];

    return (
        <ul>
            {products.map(product => (
                <li 
                    key={product.id} 
                    className={product.id % 2 === 0 ? "bg-green" : "bg-gray"}
                >
                    {product.name} - ${product.price}
                </li>
            ))}
        </ul>
    );
}
```

#### Why are `key` Props Important?
- **Virtual DOM Reconciliation**: Keys help React identify which items in a list have changed, been added, or been removed.
- **Performance Optimization**: Stable keys prevent React from re-rendering the entire list when only a single element changes.
- **Rule**: Always use unique, persistent identifiers (e.g. `product.id`). Avoid using array indices (`index`) as keys for dynamic lists.

---

## 🛠️ Quickstart Guide

To run the List & Conditional Rendering demo project:

```bash
# Navigate to the project directory
cd 2-RenderingListAndConditionalRendering

# Install dependencies
npm install

# Start Vite dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

*Part of the React 19 Full-Stack Masterclass.*
