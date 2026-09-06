# 🔴 Mastering Redux Toolkit (`@reduxjs/toolkit`)

Welcome to **Mastering Redux Toolkit**, an in-depth guide to global state management, predictable state containers, Redux Toolkit slices (`createSlice`), store configuration (`configureStore`), React bindings (`useDispatch`, `useSelector`), and asynchronous middleware (`createAsyncThunk`).

---

## 📂 Module Architecture

```text
6-MasteringRedux/
├── 📁 1-ReduxUnderstanding/                         # Redux principles & architecture comparison
│   ├── 📁 1-WithoutRedux/                           # Prop-drilling & state management bottlenecks
│   └── 📁 2-WithRedux/                              # Redux single source of truth & unidirectional data flow
│
├── 📁 2-StoreAndReducer/                            # Redux Toolkit setup with configureStore & createSlice
├── 📁 3-TodoAppUsingRedux/                          # Practical Redux Toolkit Todo application
└── 📁 4-AsyncThunkRedux/                            # Asynchronous API handling with createAsyncThunk
```

---

## 📚 Core Redux Principles & Code Patterns

### 🟢 1. Core Redux Philosophy (`1-ReduxUnderstanding`)
Redux follows 3 fundamental principles:
1. **Single Source of Truth**: The global state of your app is stored in a single object tree inside a single Redux **Store**.
2. **State is Read-Only**: The only way to change the state is to emit (dispatch) an **Action** describing what happened.
3. **Changes are Made with Pure Functions**: **Reducers** are pure functions that take `(previousState, action)` and return `newState`.

#### Unidirectional Data Flow:
```text
UI Component ──(Dispatches Action)──> Reducer ──(Updates)──> Store ──(Notifies UI)──> UI Component
```

---

### 🔵 2. Store Configuration & Slices (`2-StoreAndReducer`)
**Redux Toolkit (RTK)** simplifies Redux development by eliminating boilerplate code and incorporating Immer.js for mutable-style syntax.

#### Defining a Slice (`todoSlice.js`)
```javascript
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todos: []
};

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            // Direct mutation syntax allowed via Immer.js
            state.todos.push({
                id: Date.now(),
                text: action.payload,
                completed: false
            });
        },
        toggleTodo: (state, action) => {
            const todo = state.todos.find(item => item.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        deleteTodo: (state, action) => {
            state.todos = state.todos.filter(item => item.id !== action.payload);
        }
    }
});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
```

#### Configuring the Store (`store.js`)
```javascript
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';

export const store = configureStore({
    reducer: {
        todos: todoReducer
    }
});
```

---

### 🟣 3. Connecting Redux to React (`3-TodoAppUsingRedux`)
Wrap your root component with `<Provider store={store}>` and use `useDispatch` & `useSelector` inside functional components:

```jsx
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo } from './todoSlice';
import { useState } from 'react';

export function TodoApp() {
    const [input, setInput] = useState('');
    const todos = useSelector(state => state.todos.todos);
    const dispatch = useDispatch();

    const handleAdd = () => {
        if (input.trim()) {
            dispatch(addTodo(input));
            setInput('');
        }
    };

    return (
        <div>
            <input value={input} onChange={e => setInput(e.target.value)} />
            <button onClick={handleAdd}>Add Todo</button>

            <ul>
                {todos.map(todo => (
                    <li 
                        key={todo.id} 
                        onClick={() => dispatch(toggleTodo(todo.id))}
                        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                    >
                        {todo.text}
                    </li>
                ))}
            </ul>
        </div>
    );
}
```

---

### 🔴 4. Asynchronous Logic with `createAsyncThunk` (`4-AsyncThunkRedux`)
Handle API requests and asynchronous workflows cleanly inside Redux Toolkit:

```javascript
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// 1. Define Async Thunk
export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        return await response.json();
    }
);

// 2. Handle Promise States in Slice
const userSlice = createSlice({
    name: 'users',
    initialState: { data: [], status: 'idle', error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.data = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export default userSlice.reducer;
```

---

## 🛠️ Quickstart Guide

To run any Redux Toolkit project:

```bash
# Navigate to the target folder (e.g. 3-TodoAppUsingRedux)
cd 3-TodoAppUsingRedux

# Install dependencies (@reduxjs/toolkit & react-redux)
npm install

# Start Vite development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

*Part of the React 19 Full-Stack Masterclass.*
