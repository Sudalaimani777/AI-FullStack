# Class Components And Optimization

This folder contains three small React + Vite projects that explain class components, state, and lifecycle-based optimization.

## Projects
- [FrontEnd/React/7-ClassComponentsAndOptimization/1-ClassComponents](FrontEnd/React/7-ClassComponentsAndOptimization/1-ClassComponents)
  - Class component basics and props usage.
- [FrontEnd/React/7-ClassComponentsAndOptimization/2-HigherOrderComponent](FrontEnd/React/7-ClassComponentsAndOptimization/2-HigherOrderComponent)
  - Class state, handlers, and controlled inputs.
- [FrontEnd/React/7-ClassComponentsAndOptimization/3-PerformanceOptimizationHooks](FrontEnd/React/7-ClassComponentsAndOptimization/3-PerformanceOptimizationHooks)
  - Lifecycle methods and update control.

## Notes
- See [FrontEnd/React/7-ClassComponentsAndOptimization/NOTES.md](FrontEnd/React/7-ClassComponentsAndOptimization/NOTES.md) for concepts, hints, and interview Q&A.

## Learning checklist
- [ ] Explain what a class component is and where `render()` fits.
- [ ] Pass props into a class component and read them with `this.props`.
- [ ] Initialize local state and update it with `this.setState`.
- [ ] Handle events with class methods (arrow functions or binding).
- [ ] Build a controlled input with `value` and `onChange`.
- [ ] Describe the mount and update lifecycles.
- [ ] Use `shouldComponentUpdate` to prevent unnecessary renders.
- [ ] Identify cleanup work for `componentWillUnmount`.
- [ ] Explain how `componentDidCatch` enables error boundaries.

## Project structure (tree)
```
7-ClassComponentsAndOptimization/
  NOTES.md
  README.md
  1-ClassComponents/
    .gitignore
    bun.lock
    eslint.config.js
    index.html
    package.json
    README.md
    vite.config.js
    src/
      App.css
      App.jsx
      index.css
      main.jsx
      Components/
        Greet.jsx
  2-HigherOrderComponent/
    .gitignore
    bun.lock
    eslint.config.js
    index.html
    package.json
    README.md
    vite.config.js
    src/
      App.css
      App.jsx
      index.css
      main.jsx
      Components/
        Counter.jsx
        Header.jsx
        Input.jsx
  3-PerformanceOptimizationHooks/
    .gitignore
    bun.lock
    eslint.config.js
    index.html
    node_modules/
    package.json
    README.md
    vite.config.js
    src/
      App.css
      App.jsx
      index.css
      main.jsx
```

## How to run a project
1) Open a subfolder (one of the projects above).
2) Install dependencies:
   - npm: `npm install`
   - bun (if you prefer): `bun install`
3) Start the dev server:
   - npm: `npm run dev`
   - bun: `bun run dev`

## What to look for
- Props in class components via `this.props`.
- Local state with `this.state` and updates with `this.setState`.
- Controlled inputs that mirror state.
- Lifecycle hooks like `componentDidMount` and `shouldComponentUpdate`.
