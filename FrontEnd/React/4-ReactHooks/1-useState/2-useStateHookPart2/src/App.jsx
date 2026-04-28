import { useState } from "react"


const IncrementButton = ({setCount}) => {
  return (
    <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
  )
}

const DecrementButton = ({setCount}) => {
  return (
    <button onClick={() => setCount(prevVal => prevVal - 1)}>-</button>
  )
}

const ResetButton = ({setCount}) => {
  return (
    <button onClick={() => setCount(0)}>Reset</button>
  )
}


function App() {

  const [count, setCount] = useState(0);
  
  return (
    <>
      <section>
          <h1>Counter App</h1>
          <h3>{count}</h3>
          <IncrementButton count={count} setCount={setCount}/>
          <DecrementButton setCount={setCount}/>
          <ResetButton setCount={setCount}/>
      </section>
    </>
  )
}

export default App
