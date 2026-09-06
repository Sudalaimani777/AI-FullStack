# ⚡ React State Management Projects Suite

Welcome to the **React State Management Projects Suite**, a collection of applications focused on component state (`useState`), immutable state updates, form input handling, DOM ref scrolling (`useRef`), and AI-powered service integrations.

---

## 📂 Repository Architecture

```text
3-UsingState/
├── 📁 1-SimpleCounterApp/             # Counter application featuring state batching & sub-component props
└── 📁 2-ChefClaude/                   # AI Recipe Generator powered by OpenRouter API & React state
```

---

## 🚀 Projects Overview

### 1. 🔢 Simple Counter Application (`1-SimpleCounterApp`)
- **Focus**: React `useState` fundamentals.
- **Key Concepts**:
  - Managing primitive number state (`count`).
  - Functional updates (`setCount(prev => prev + 1)`).
  - Passing state down as props to presentation components (`<Counter count={count} />`).
  - Resetting state to initial default values.

---

### 2. 👨‍🍳 Chef Claude AI Recipe Generator (`2-ChefClaude`)
- **Focus**: Complex array state updates, form actions, AI API integration, and smooth DOM scrolling.
- **Key Features**:
  - **Dynamic Ingredients List**: Adding ingredients to state using React 19 form actions and immutable array spreading (`[...prev, newItem]`).
  - **OpenRouter AI Integration**: Calling OpenRouter LLM service (`getRecipeFromOpenRouter`) to generate custom recipes based on available ingredients.
  - **Smooth Ref Scrolling**: Utilizing `useRef` and `useEffect` to automatically compute Y-coordinates and smoothly scroll to the generated recipe section:
    ```javascript
    useEffect(() => {
        if (recipe !== "" && recipeSection.current !== null) {
            const yOffset = recipeSection.current.getBoundingClientRect().top + window.pageYOffset;
            window.scroll({ top: yOffset, behavior: "smooth" });
        }
    }, [recipe]);
    ```
  - **Modular Architecture**: Component breakdown into `Header.jsx`, `Main.jsx`, `IngredientsList.jsx`, and `ClaudeRecipe.jsx`.

---

## 🛠️ Quickstart Guide

To run any state management project:

```bash
# Navigate to desired project folder (e.g. 2-ChefClaude)
cd 2-ChefClaude

# Install dependencies
npm install

# Configure OpenRouter API key in .env (for Chef Claude)
# VITE_OPENROUTER_API_KEY=your_api_key

# Start Vite development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

*Part of the React Projects Suite.*
