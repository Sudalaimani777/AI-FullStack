import { useReducer } from "react"
import { handleCounterReducer, initialState } from "./Reducer/counterReducer";


function App() {

  const [state, dispatch] = useReducer(handleCounterReducer, initialState);


  return (
    <>
      <section>
        <h1>Counter using useReducer</h1>
        <h3>{state.count}</h3>
        <button onClick={() => dispatch({ type: "inc" })}>INC</button>
        <button onClick={() => dispatch({ type: "dec" })}>DEC</button>
      </section>
    </>
  )
}

export default App
