# 🟢 Node.js Core Fundamentals & Tasks

Welcome to the **Node.js Core Fundamentals & Tasks** directory within the **AI-FullStack** repository. This folder contains hands-on practice labs and tasks focused on building backend foundations using core **Node.js Modules** (HTTP, FS, OS, Process, Path), **Async File System Operations**, **Environment Configuration**, and **Folder Hierarchy Generation**.

---

## 📂 Architecture & Folder Structure

```text
Tasks/Backend/Node/
├── 📁 Task1/                 # Node.js Core Modules (HTTP Server, OS Metrics, Process CLI, Path Resolution)
└── 📁 Task2/                 # Async FS Promises, Automated Folder Generator & Mini File Manager
```

---

## ⚡ Tech Stack & Core Modules

| Module / Tool | Purpose |
| :--- | :--- |
| **Node.js (ESM)** | Modern JavaScript runtime using native ES Modules (`"type": "module"`) |
| **`http`** | Core Node.js HTTP server module for request/response handling |
| **`fs/promises`** | Asynchronous promise-based filesystem operations (CRUD, recursive `mkdir`, `copyFile`, `unlink`) |
| **`os`** | Operating system metrics (Hostname, Platform, CPU Cores, Total/Free Memory) |
| **`process`** | Process execution stats (Node version, PID, CWD, CLI arguments, `process.env`) |
| **`path` & `url`** | Path manipulation (`join`, `resolve`) and ES Module `__dirname`/`__filename` recreation |
| **`dotenv`** | Environment variable loader parsing `.env` configurations |

---

## 📅 Task Breakdowns & Learning Objectives

### 🟢 Task 1: Node.js Core Modules & HTTP Server
- **Focus**: Core system inspection and HTTP server setup.
- **Key Features**:
  - `http.createServer`: Lightweight Native HTTP server listening on custom PORT.
  - `os` Module: Hostname, platform, CPU architecture, total and free RAM stats.
  - `process` Module: Node version, current working directory, process arguments.
  - `path` Module: Joining paths (`path.join`), resolving absolute vs relative paths (`path.resolve`).
  - `dotenv`: Environmental configuration management.
- **Server Port**: `http://localhost:6000`

### 🟢 Task 2: Asynchronous FS Promises & Automated Folder Generator
- **Focus**: Asynchronous file management and directory orchestration using `fs/promises`.
- **Key Tasks**:
  1. **Student File Management**: Recursive folder creation, writing, appending, reading, renaming (`students.txt` → `student-list.txt`), and unlinking files.
  2. **Project Folder Generator**: Automated project structure creation (`public/css`, `public/js`, `public/images`, `uploads/documents`, `uploads/videos`, `config`, `logs`).
  3. **System Information Dashboard**: Formatting OS and process stats into a clean console dashboard.
  4. **Environment Configuration**: Programmatically writing `.env` and loading runtime environment variables.
  5. **Mini File Manager Project (`Node-Day3`)**: Multi-directory file operations, copying files to backup directories (`copyFile`), and managing storage reports.

---

## 🚀 Quickstart Guide

To execute any task script:

1. **Navigate to the target task directory**:
   ```bash
   cd Tasks/Backend/Node/Task2
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the Task Script**:
   ```bash
   node server.js
   ```

---

[← Back to Backend Tasks Hub](../README.md)
