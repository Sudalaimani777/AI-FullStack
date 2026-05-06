import { useState } from "react";
import Text from "./Components/Text/Text";


function App() {

  const [count, setCount] = useState(0);

  const handleInc = () => setCount(prevCount => prevCount + 1);
  const handleDec = () => setCount(prevCount => prevCount - 1);
  const handleReset = () => setCount(0);


  return (
    <>
      <section>
        <h1>Prop Drilling</h1>
        <Text
          count={count}
          handleInc={handleInc}
          handleDec={handleDec}
          handleReset={handleReset}
        />
      </section>
    </>
  )
}

export default App
