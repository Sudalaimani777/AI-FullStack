# 🧩 React JSX & Functional Components

Welcome to **JSX & Functional Components**, a foundational module on writing JSX (JavaScript XML), building modular functional components, passing props, and composing reusable UI structures in React 19.

---

## 📂 Module Architecture

```text
2-JSXAndComponents/
├── 📁 2.1-JSX/                         # JSX syntax rules, expressions, and compilation mechanics
└── 📁 2.2-FunctionalComponent/         # Reusable functional components, props, and composition
```

---

## 📚 Section Breakdown & Key Concepts

### 🟢 Section 1: JSX Fundamentals (`2.1-JSX`)
JSX is a syntax extension for JavaScript that allows you to write HTML-like markup directly inside JavaScript files.

#### Core Principles of JSX:
- **Under the Hood**: JSX is transpiled by Babel/SWC into regular JavaScript calls:
  ```jsx
  // JSX Syntax
  const element = <h1 className="title">Hello World</h1>;

  // Transpiled Compilation
  const element = React.createElement('h1', { className: 'title' }, 'Hello World');
  ```
- **Embedding Expressions**: Any valid JavaScript expression can be embedded inside `{}` curly braces:
  ```jsx
  const userName = "Alice";
  const userAge = 24;

  return <h1>Hello, {userName}! You are {userAge} years old.</h1>;
  ```
- **JSX Rules**:
  1. Must return a **single root element** (or React Fragment `<> ... </>`).
  2. Use `className` instead of `class` for CSS classes.
  3. Attributes use camelCase syntax (e.g. `onClick`, `tabIndex`, `readOnly`).
  4. All tags must be explicitly closed (`<img />`, `<input />`, `<br />`).

---

### 🔵 Section 2: Functional Components & Props (`2.2-FunctionalComponent`)
Components are the independent, reusable building blocks of a React application UI.

#### 1. Basic Functional Component
A JavaScript function that returns JSX markup:

```jsx
// Greeting.jsx
function Greeting() {
    return <h1>Hello, Welcome to React!</h1>;
}

export default Greeting;
```

#### 2. Components with Props (Properties)
Props are read-only arguments passed from parent components to child components:

```jsx
// UserCard.jsx
function UserCard({ name, age, email }) {
    return (
        <div className="card">
            <h2>{name}</h2>
            <p>Age: {age}</p>
            <p>Email: {email}</p>
        </div>
    );
}

export default UserCard;
```

#### 3. Component Composition in `App.jsx`
```jsx
// App.jsx
import Greeting from './Greeting';
import UserCard from './UserCard';

function App() {
    return (
        <div>
            <Greeting />
            <UserCard name="John Doe" age={25} email="john@example.com" />
            <UserCard name="Jane Smith" age={30} email="jane@example.com" />
        </div>
    );
}

export default App;
```

---

## 🛠️ Quickstart

To run the functional component project:

```bash
# Navigate to the functional component project
cd 2.2-FunctionalComponent

# Install dependencies
npm install

# Start Vite dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

*Part of the React 19 Full-Stack Masterclass.*
