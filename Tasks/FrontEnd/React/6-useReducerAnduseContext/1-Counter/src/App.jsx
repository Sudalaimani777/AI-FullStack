import { useContext } from "react"
import CounterContext from "./Context/CounterContext";

function App() {

  const { count, counterDispatch } = useContext(CounterContext);
  console.log(count, counterDispatch);

  const {handleInc, handleDec} = useContext(CounterContext);

  return (
    <>
      <section>
        <h1>Count - {count}</h1>
        <button onClick={handleInc}>Inc</button>
        <button onClick={handleDec}>Dec</button>
      </section>
    </>
  )
}

export default App
