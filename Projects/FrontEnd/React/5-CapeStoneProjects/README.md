# 🎮 React Capstone Projects Suite

Welcome to the **React Capstone Projects Suite**, a showcase of complex interactive web games and state-driven applications demonstrating advanced state management, component composition, accessibility (ARIA), third-party animations (`react-confetti`), and custom game logic.

---

## 📂 Repository Architecture

```text
5-CapeStoneProjects/
├── 📁 1-Tenzies/                      # Interactive Tenzies dice rolling game
└── 📁 2-Assembly/                     # Assembly Endgame word-guessing game (Hangman-style)
```

---

## 🚀 Projects Overview

### 1. 🎲 Tenzies Game (`1-Tenzies`)
An interactive 10-dice rolling game built in React.

#### 🛠️ Key Features & Mechanics
- **Lazy State Initializer**: Initializing dice state using a callback function `useState(() => generateNewDie())` to avoid unnecessary re-execution.
- **Freeze & Hold Logic**: Clicking a die toggles its `isHeld` status, preserving its value across subsequent rolls.
- **Win Condition Reconciliation**: Automatically detects when all 10 dice are held and share the identical value (`numbers.every(die => die.isHeld) && numbers.every(die => die.value === firstVal)`).
- **Celebration & Accessibility**: Renders screen-wide `<Confetti />` upon victory and uses `aria-live="polite"` to announce game updates to screen readers.

---

### 2. 💻 Assembly Endgame Game (`2-Assembly`)
A word-guessing game designed to test vocabulary and state management skills under constraint limits.

#### 🛠️ Key Features & Mechanics
- **Attempt & Damage Calculation**: Tracks wrong guess counts (`MAX_WRONG_GUESSES = 8`) and dynamically computes remaining attempts.
- **Dynamic Programming Language Chips**: Simulates saving programming languages as the user guesses letters correctly.
- **Interactive Keyboard**: Generates on-screen alphabet keys with `clsx` conditional styling (`correct`, `wrong`, `disabled`).
- **Farewell Messages & Win/Loss Logic**: Computes dynamic farewell messages (`getFarewellText`) per failed attempt and reveals word letters upon game loss.

---

## 🛠️ Quickstart Guide

To run any capstone project:

```bash
# Navigate to desired project directory (e.g. 1-Tenzies or 2-Assembly)
cd 1-Tenzies

# Install dependencies (including react-confetti & clsx)
npm install

# Start Vite development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

*Part of the React Projects Suite.*
