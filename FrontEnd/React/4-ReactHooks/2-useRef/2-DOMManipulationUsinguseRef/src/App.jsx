import { useRef } from "react";
import Input from "./Components/Input";

function App() {

  const inputRef= useRef();

  const handleFocus = () => {
    inputRef.current.focus();
  }

  return (
    <>
      <section>
        {/* We  pass the ref in the input for the focus functionality  */}
        {/* <input type="text" placeholder="Enter" ref={inputRef}/>   */}

        {/* Now we are going to pass the ref to the another component */}
        <Input placeholder="Click to focus" ref={inputRef}/>
        <button onClick={handleFocus}>Foncus</button> 
      </section>
    </>
  )
}

export default App
