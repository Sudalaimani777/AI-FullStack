# ⭐ React Feedback & Review Application

Welcome to the **React Feedback & Review Application**, a full-featured customer review management app built with **React 19**, **Vite**, **Context API**, **React Router (v7)**, **React Icons**, and **UUID**.

---

## 📂 Repository Architecture

```text
6-ReviewApp/
├── 📁 Data/                                         # Initial mock review datasets
├── 📁 src/
│   ├── 📁 Components/                               # UI & Form components
│   │   ├── 📄 FeedbackForm.jsx                      # Review input form & rating selector
│   │   ├── 📄 FeedbackItem.jsx                      # Single feedback card (Edit & Delete buttons)
│   │   ├── 📄 FeedbackLength.jsx                    # Live count & average rating summary bar
│   │   ├── 📄 FeedbackList.jsx                      # List renderer consuming FeedbackContext
│   │   ├── 📄 Header.jsx                            # Brand header bar
│   │   └── 📁 SharedComponent/                      # Reusable Card container & Button components
│   ├── 📁 Context/                                  # Global Context state management
│   │   ├── 📄 FeedbackContext.jsx                   # CRUD logic & edit item state management
│   │   └── 📄 ThemeContext.jsx                      # Global Theme toggling (Dark / Light)
│   ├── 📁 Pages/                                    # SPA view pages (AboutPage.jsx)
│   ├── 📄 App.jsx                                   # Root layout & React Router configuration
│   └── 📄 index.css                                 # Custom card styling & rating badge styles
├── 📄 package.json                                  # App dependencies
└── 📄 vite.config.js                                # Vite bundler configuration
```

---

## 🚀 Application Features & Core Concepts

### 🛠️ Key Technical Highlights

1. **Context API Global State (`FeedbackContext.jsx`)**:
   - Manages all review items globally without prop-drilling.
   - Provides `addFeedback`, `deleteFeedback`, `editFeedback`, and `updateFeedback` functions to all sub-components.

2. **Interactive Rating Selection & Form Validation (`FeedbackForm.jsx`)**:
   - Integrated numeric rating selector (1-10).
   - Real-time text validation enforcing a minimum 10-character feedback length before enabling submission.

3. **Live Rating Stats (`FeedbackLength.jsx`)**:
   - Dynamically calculates average customer rating and total review counts using array reduction:
     ```javascript
     const average = (feedback.reduce((acc, cur) => acc + cur.rating, 0) / feedback.length)
         .toFixed(1)
         .replace(/[.,]0$/, '');
     ```

4. **Edit & Update Flow**:
   - Clicking the edit icon populates `FeedbackForm` with current values.
   - Submitting updates the item in `FeedbackContext` while retaining its unique `uuid`.

5. **Single Page Navigation (`react-router-dom`)**:
   - Includes an `AboutPage` route showcasing app versioning and copyright metadata.

---

## 🛠️ Quickstart Guide

To run the Review Application:

```bash
# Navigate to the project directory
cd 6-ReviewApp

# Install dependencies (react-router-dom, react-icons, uuid)
npm install

# Start Vite development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

*Part of the React Projects Suite.*
