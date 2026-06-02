import { useState } from "react"
import Counter from "./components/Counter";
import { IndexForClassComp } from "./components/IndexForClassComp";


const App = () => {

  const [count, setCount] = useState(0);

  const incCount = () => setCount(prevCount => prevCount + 1);
  const decCount = () => setCount(prevCount => prevCount - 1);

  return (
    <>
      <main>
        {/* <Counter count={count} incCount={incCount} decCount={decCount} /> */}
        <IndexForClassComp/>
      </main>
    </>
  )
}

export default App