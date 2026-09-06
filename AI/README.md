# 🤖 AI & LLM Development Lab

Welcome to the **AI & LLM Development Lab**, a comprehensive repository containing projects, experiments, and backend services focused on Artificial Intelligence, Large Language Model (LLM) integrations, Prompt Engineering, and Retrieval-Augmented Generation (RAG).

---

## 📂 Repository Architecture

```text
AI/
├── 📁 1-PromptPlayground/     # React + Vite frontend AI chat application powered by OpenRouter API
└── 📁 2-RAG/                  # Python + FastAPI backend for PDF uploading & document context processing
```

---

## ⚡ Project Modules

### 1. 💬 Prompt Playground (`1-PromptPlayground`)

An interactive, responsive AI Chat Playground built using **React 19**, **Vite**, and **Tailwind CSS v4**. It integrates with the **OpenRouter API** to allow seamless interaction with various open-source and proprietary LLM models (e.g., `nvidia/nemotron-3-ultra-550b-a55b:free`).

#### 🛠️ Tech Stack
- **Frontend Framework**: React 19 + Vite
- **Styling**: Tailwind CSS v4
- **State Management**: Zustand
- **HTTP Client**: Axios
- **LLM Gateway**: OpenRouter API

#### 🚀 Quickstart

1. Navigate to the project directory:
   ```bash
   cd 1-PromptPlayground
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root of `1-PromptPlayground`:
   ```env
   VITE_OPENROUTER_API_KEY=your_openrouter_api_key_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

---

### 2. 📚 RAG & Document Processing (`2-RAG`)

A Python backend API built with **FastAPI** to facilitate Retrieval-Augmented Generation workflows. It handles PDF document uploads, file persistence in `uploads/`, and text parsing using **PyPDF2**.

#### 🛠️ Tech Stack
- **Language**: Python 3.x
- **Web Framework**: FastAPI
- **ASGI Server**: Uvicorn
- **PDF Extraction**: PyPDF2
- **Form Data Processing**: python-multipart

#### 🔗 API Endpoints

| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/` | Health check / Welcome message |
| `GET` | `/about` | Information about the RAG backend service |
| `GET` | `/contact` | Contact endpoint |
| `POST` | `/upload` | Upload a PDF document for parsing and storage |

#### 🚀 Quickstart

1. Navigate to the directory:
   ```bash
   cd 2-RAG
   ```

2. Create and activate a Python virtual environment:
   ```bash
   # Windows (PowerShell)
   python -m venv venv
   .\venv\Scripts\Activate.ps1

   # Linux / macOS
   python3 -m venv venv
   source venv/bin/activate
   ```

3. Install required packages:
   ```bash
   pip install fastapi uvicorn pypdf2 python-multipart
   ```

4. Run the API server with auto-reload:
   ```bash
   uvicorn app:app --reload
   ```
   The interactive API docs will be available at [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs).

---

## 📌 Development Guidelines & Best Practices

- **Environment Variables**: Never commit API keys (`.env` files) to version control.
- **Python Dependencies**: Keep your virtual environment (`venv`) activated while installing or running Python modules.
- **Node Dependencies**: Ensure Node.js (>= 18) is installed before initializing React components.

---

*Part of the full-stack AI development workspace.*
