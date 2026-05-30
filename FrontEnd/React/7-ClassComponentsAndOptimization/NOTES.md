# Class Components And Optimization Notes

## Folder map
- 1-ClassComponents: basics of class components and props.
- 2-HigherOrderComponent: class state, event handlers, controlled inputs, and a counter.
- 3-PerformanceOptimizationHooks: class lifecycle methods and update control.

## Key concepts with easy hints

### Class component basics
- A class component is `class X extends Component` and must implement `render()`.
- Props are read from `this.props` (read-only from the parent).
- Hint: Props are passed in, state is owned inside.

### State and event handlers
- Initialize state with a class field: `state = { ... }` (or in `constructor`).
- Update state using `this.setState(...)`, not direct mutation.
- Hint: If the next state depends on the previous state, use functional `setState`.
- Use arrow functions for handlers to keep `this` bound.

### Controlled inputs
- A controlled input sets `value` from state and updates via `onChange`.
- Hint: If you set `value`, you must also handle `onChange`.

### Lifecycle and optimization
- `componentDidMount()` runs after first render (good for API calls).
- `shouldComponentUpdate(nextProps, nextState)` can skip re-render if it returns `false`.
- `componentDidUpdate(prevProps, prevState)` runs after updates.
- `componentWillUnmount()` cleans up timers, subscriptions, listeners.
- `componentDidCatch(error, info)` creates an error boundary.
- Hint: Mnemonic is M-U-U: Mount, Update, Unmount.

## File pointers (examples in this folder)
- Props in a class component: [FrontEnd/React/7-ClassComponentsAndOptimization/1-ClassComponents/src/Components/Greet.jsx](FrontEnd/React/7-ClassComponentsAndOptimization/1-ClassComponents/src/Components/Greet.jsx)
- State and handlers: [FrontEnd/React/7-ClassComponentsAndOptimization/2-HigherOrderComponent/src/Components/Counter.jsx](FrontEnd/React/7-ClassComponentsAndOptimization/2-HigherOrderComponent/src/Components/Counter.jsx)
- Controlled input: [FrontEnd/React/7-ClassComponentsAndOptimization/2-HigherOrderComponent/src/Components/Input.jsx](FrontEnd/React/7-ClassComponentsAndOptimization/2-HigherOrderComponent/src/Components/Input.jsx)
- Lifecycle methods: [FrontEnd/React/7-ClassComponentsAndOptimization/3-PerformanceOptimizationHooks/src/App.jsx](FrontEnd/React/7-ClassComponentsAndOptimization/3-PerformanceOptimizationHooks/src/App.jsx)

## Interview questions with answers

1) Q: What is the difference between props and state?
   A: Props are read-only inputs from a parent. State is local, managed inside the component, and updated with `setState`.

2) Q: Why should you use `setState` instead of mutating `this.state` directly?
   A: `setState` tells React to re-render and allows batching; direct mutation can cause stale or missing updates.

3) Q: How do you keep `this` bound in class component handlers?
   A: Use arrow functions (`handleClick = () => {}`) or bind in the constructor.

4) Q: When does `componentDidMount` run, and what is it used for?
   A: It runs after the first render; use it for data fetching or subscriptions.

5) Q: What is `shouldComponentUpdate` for?
   A: It lets you prevent unnecessary re-renders by returning `false` when props and state do not require a re-render.

6) Q: What is a controlled component?
   A: An input whose value is driven by React state and updated via `onChange`.

7) Q: How do you update state based on the previous state safely?
   A: Use functional `setState`, for example: `this.setState(prev => ({ count: prev.count + 1 }))`.

8) Q: What should you do in `componentWillUnmount`?
   A: Clean up timers, subscriptions, and event listeners to avoid memory leaks.

9) Q: What is an error boundary?
   A: A class component that uses `componentDidCatch` to handle errors in its child tree and show fallback UI.

10) Q: What is the typical mount lifecycle order?
   A: `constructor` -> `render` -> `componentDidMount`.
