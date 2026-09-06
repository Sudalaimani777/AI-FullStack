# 🗺️ Data-Driven React Applications

Welcome to **Data-Driven React Applications**, a project module focused on rendering dynamic UI structures from JavaScript data arrays, object prop passing, `.map()` iteration, and component decomposition.

---

## 📂 Repository Architecture

```text
2-DataDrivenReact/
└── 📁 1-TravelJournal/                 # Dynamic Travel Journal driven by structured array datasets
    ├── 📁 components/                  # Header & Entry card components
    ├── 📁 images/                      # Static assets & globe logo
    ├── 📄 data.js                      # Travel entries dataset (Mount Fuji, Sydney Opera House, Geirangerfjord)
    ├── 📄 App.jsx                      # Mapping data items into Entry elements
    └── 📄 index.css                    # Custom layout styles & container flexbox
```

---

## 🚀 Featured Project: ✈️ Travel Journal (`1-TravelJournal`)

A clean, responsive Travel Journal UI that dynamically generates entry cards by iterating over an array of location objects.

### 🛠️ Key Concepts & Architecture
- **Data Array Iteration (`.map()`)**:
  ```jsx
  const entryElements = data.map((entry) => {
      return (
          <Entry
              key={entry.id}
              entry={entry}
          />
      );
  });
  ```
- **Passing Objects as Props**: Passing entire `entry` data objects down to the child `<Entry />` component, which destructures fields (`img`, `title`, `country`, `googleMapsLink`, `dates`, `text`).
- **Reconciliation Keys**: Assigning unique, persistent `entry.id` numbers to the `key` prop for optimal Virtual DOM diffing.

---

## 🛠️ Quickstart Guide

To run the Travel Journal application:

```bash
# Navigate to the Travel Journal directory
cd 1-TravelJournal

# Install dependencies
npm install

# Start Vite dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

*Part of the React Projects Suite.*
