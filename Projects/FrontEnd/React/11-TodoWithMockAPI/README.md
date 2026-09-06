# 📋 TodoWithMockAPI — Asynchronous Task Management with Zustand & Axios

**TodoWithMockAPI** is a modern task management application built with **React 19**, **Vite**, **Zustand (v5)** state management, and **Axios**. It connects to an external RESTful **Mock API** service to demonstrate full asynchronous CRUD operations (Create, Read, Update, Delete) with global error handling, loading states, and live search filtering.

---

## 🏗️ Architecture & Folder Structure

```
11-TodoWithMockAPI/
├── src/
│   ├── api/                 # API service layer
│   │   ├── axios.js         # Custom Axios instance with baseURL configuration
│   │   └── todoApi.js       # RESTful API helper functions (getTask, createTask, updateTask, deleteTask)
│   ├── store/               # Global state store
│   │   └── todoStore.js     # Zustand store powering task list, loading, error, search & edit states
│   ├── App.css              # Custom styling definitions
│   ├── App.jsx              # Main React application component
│   ├── index.css            # Global CSS styles & base resets
│   └── main.jsx             # React entry point rendering root App component
├── .gitignore               # Git untracked files configuration
├── index.html               # Vite HTML entry template
├── package.json             # App dependencies & script declarations
└── vite.config.js           # Vite configuration file
```

---

## ⚡ Tech Stack & Tools

| Technology | Purpose |
| :--- | :--- |
| **React 19** | Modern UI library powering component lifecycle and view layer |
| **Vite 8** | Next-generation frontend build tool and hot-reloading dev server |
| **Zustand 5** | Lightweight, boilerplate-free state management solution |
| **Axios** | Promise-based HTTP client for API request orchestration |
| **Mock API** | Remote REST API endpoint providing task persistence |

---

## ✨ Key Features & Architecture Patterns

1. **Zustand State Store (`todoStore.js`)**:
   - Centralized task storage (`allTasks`), global loading spinner state (`loading`), error tracking (`error`), task search query (`searchTaskData`), and draft edit state (`editTaskData`).

2. **Decoupled API Layer (`todoApi.js`)**:
   - Clean abstraction of asynchronous HTTP endpoints using Axios:
     - `getTask()`: Fetches full list of tasks.
     - `getTaskById(id)`: Retrieves single task metadata.
     - `createTask(task)`: Appends new task record to server.
     - `updateTask(id, updatedTask)`: Replaces task content.
     - `deleteTask(id)`: Removes task from server.

3. **Custom Axios Client (`axios.js`)**:
   - Configures central `MOCK_API_URL` environment endpoint with default JSON headers.

---

## 🚀 Quickstart Guide

### Prerequisites
- Node.js (v18 or higher)
- Mock API service endpoint URL

### Environment Setup
Create a `.env` file in the root directory:
```env
MOCK_API_URL = https://your-mock-api-endpoint.mockapi.io/tasks
```

### Installation & Execution

1. **Navigate to project directory**:
   ```bash
   cd Projects/FrontEnd/React/11-TodoWithMockAPI
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start Development Server**:
   ```bash
   npm run dev
   ```

4. **Build for Production**:
   ```bash
   npm run build
   ```

---

[← Back to React Projects Hub](../README.md)
