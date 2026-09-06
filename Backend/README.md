# ⚙️ Backend Engineering Hub

Welcome to the **Backend Engineering Hub**, a structured repository dedicated to mastering core backend concepts, web servers, REST API development, database integrations, authentication mechanisms, and backend interview preparation.

---

## 📂 Repository Architecture

```text
Backend/
├── 📁 Node/                   # Raw Node.js core modules & HTTP web server fundamentals
│   ├── 📁 Day1/               # Native HTTP server creation with http.createServer()
│   └── 📁 Day2/               # Node core modules (http, path, process) & environment vars
│
├── 📁 Express/                # Express.js 5.x Masterclass & progressive API building
│   ├── 📁 Day1 - Day4/        # Express server, Router middleware, & multi-endpoint architecture
│   ├── 📁 Day5 - Day6/        # MongoDB connection (Mongoose) & RESTful CRUD data modeling
│   ├── 📁 Day7/               # Password encryption & hashing with Bcrypt
│   ├── 📁 Day8 - Day9/        # Full-stack Client-Server connection & CORS
│   └── 📁 Day10/              # JWT Authentication, schema validation & protected routes
│
└── 📄 InterviewQuestions.txt  # Curated backend & Express.js technical interview Q&A guide
```

---

## 🚀 Key Modules & Learning Outcomes

### 1. 🟢 Core Node.js Fundamentals (`/Node`)
Focuses on understanding Node.js under the hood without external web frameworks:
- **Event Loop & Built-in Modules**: Exploring `http`, `path`, and `process`.
- **HTTP Web Server**: Building low-level HTTP servers using `http.createServer()`.
- **Environment Management**: Loading dynamic port bindings via `dotenv`.

---

### 2. ⚡ Express.js & MongoDB Masterclass (`/Express`)
A progressive 10-day curriculum covering scalable RESTful API design:
- **Routing & Middleware**: Modular endpoint design with `express.Router()`, `cors()`, and `express.json()`.
- **Database Persistence**: Object Document Mapping (ODM) with Mongoose and MongoDB Atlas/Local.
- **Security & Hashing**: Salting and hashing passwords via `bcrypt`.
- **Authentication**: Implementing stateless **JSON Web Tokens (JWT)** for route protection.
- **Full-Stack Decoupling**: Connecting frontend clients to Express APIs with CORS.

---

### 3. 🎯 Interview Preparation Guide (`InterviewQuestions.txt`)
Contains essential backend engineering interview questions and answers covering:
- **Express vs. Node `http`**: Understanding the advantages of Express routing and middleware.
- **Request & Response Lifecycles**: Distinguishing `req` vs `res`, `res.send()` vs `res.json()`.
- **Application Instance**: Understanding `express()` return objects and `app.listen()` binding.
- **Development Tooling**: Automatic server reloads using `nodemon`.

---

## 💡 Technical Interview Q&A Quick Reference

<details>
<summary><b>1. Express.js vs. Node's native HTTP module</b></summary>

While Node's native `http` module allows building HTTP servers, Express provides:
- Simplified parametric routing
- Built-in request/response helper functions
- Robust middleware ecosystem
- Cleaner code organization & scalability
</details>

<details>
<summary><b>2. `res.send()` vs. `res.json()`</b></summary>

| Function | Output Content | Content-Type Header |
| :--- | :--- | :--- |
| `res.send()` | Strings, HTML, Objects, Buffers | Auto-detected based on payload |
| `res.json()` | JSON objects / arrays | Explicitly set to `application/json` |
</details>

<details>
<summary><b>3. What does `express()` return?</b></summary>

It returns an Express application instance (`app`) which exposes API methods for setting up middleware (`app.use`), route handlers (`app.get`, `app.post`), and initiating the HTTP listener (`app.listen`).
</details>

---

## 🛠️ Quickstart

To run any module in this backend directory:

```bash
# Navigate to desired directory (e.g. Express Day10)
cd Express/Day10/server

# Install dependencies
npm install

# Start development server
npm run dev
```

---

*Part of the full-stack engineering workspace.*
