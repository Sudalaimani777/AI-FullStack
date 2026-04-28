import { useState } from 'react'

// useState is a hook that allows us to add state to functional components in React. It returns an array with two elements: the current state value and a function to update that state. We can use it to manage and update state in our components, making them more interactive and dynamic.


function App() {
  const [count, setCount] = useState(0);

  function handleInc(){
    setCount(prevCount => prevCount + 1);
  }
  function handleDec(){
    setCount(prevCount => prevCount - 1);
  }
  function handleReset(){
    setCount(0);
  }
  return (
    <>
      <section>
        <h1>Counter App</h1>
        <p>Count : {count}</p>
        <button onClick={handleInc}>+</button>
        <button onClick={handleDec}>-</button>
        <button onClick={handleReset}>Reset</button>
      </section>
    </>
  )
}

export default App
