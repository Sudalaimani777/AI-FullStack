import Counter from "./Components/Counter"
import StopWatch from "./Components/StopWatch"


function App() {


  return (
    <>
      <header>
        <h1>useRef Hook Intro</h1>
        <p>useRef is a hook that allows you to create a mutable reference that persists across re-renders. It can be used to store a reference to a DOM element or to store any mutable value that you want to persist across renders.</p>
      </header>
      <section>
        <h2>Counter Component</h2>
        <p>The Counter component is a simple component that displays a counter value and has buttons to increment and decrement the counter. We will use the useRef hook to store the counter value and update it without causing a re-render.</p>

        {/* <Counter /> */}
        <StopWatch/>
      </section>
    </>
  )
}

export default App
