# 📄 React Static Page Projects Suite

Welcome to the **React Static Page Projects Suite**, a collection of foundational React applications focused on component decomposition, JSX layout building, custom CSS styling, static asset embedding, and modern UI creation.

---

## 📂 Repository Architecture

```text
1-StaticPages/
├── 📁 1-HouseKeeping/             # Vite + React setup, DOM root creation & asset embedding
├── 📁 2-StaticPage/               # Extracting Header, MainContent & Footer components
├── 📁 3-ReactFunFacts/            # Interactive React Fun Facts page with custom navigation
└── 📁 4-DigitalBusinessCard/      # Personal Digital Business Card with profile & social links
```

---

## 🚀 Projects Overview

### 1. 🧹 React HouseKeeping (`1-HouseKeeping`)
- **Focus**: Setting up Vite + React runtime environments.
- **Key Concepts**: `createRoot(document.getElementById('root')).render()`, importing static images (`react-logo.png`), basic JSX tags, and container styling.

---

### 2. 🧱 Modular Static Page (`2-StaticPage`)
- **Focus**: Transitioning from monolithic JSX into modular functional components.
- **Key Components**:
  - `Header.jsx`: Top navigation bar with logo and nav links.
  - `MainContent.jsx`: Page title, structured list items, and main body markup.
  - `Footer.jsx`: Copyright and metadata text.

---

### 3. ⚛️ React Fun Facts Page (`3-ReactFunFacts`)
- **Focus**: Real-world brand layout building.
- **Key Components**:
  - `Navbar.jsx`: Brand logo, header title, and course project badges.
  - `Main.jsx`: Fun facts list with stylized bullet points and semi-transparent React background logo overlay (`react-icon-half.png`).

---

### 4. 🎴 Digital Business Card (`4-DigitalBusinessCard`)
- **Focus**: Responsive personal card component design.
- **Key Components**:
  - `Info.jsx`: User profile photo, full name, job title, portfolio website URL, and direct Email / LinkedIn call-to-action buttons.
  - `About.jsx`: Short bio and career overview.
  - `Interests.jsx`: Personal hobbies and skills highlight section.
  - `Footer.jsx`: Social media icon bar (Twitter, Facebook, Instagram, GitHub).

---

## 🛠️ Quickstart Guide

To run any static page project:

```bash
# Navigate to desired project folder (e.g. 4-DigitalBusinessCard)
cd 4-DigitalBusinessCard

# Install dependencies
npm install

# Start Vite dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser to view the running application.

---

*Part of the React Projects Suite.*
