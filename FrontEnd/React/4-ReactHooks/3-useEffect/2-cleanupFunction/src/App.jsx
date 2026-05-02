import { useEffect } from "react";
import { useState } from "react"

const App = () => {

  const [count, setCount] = useState(0);

  // The cleanup function is a function that is returned from the useEffect hook. It is used to clean up any side effects that were created in the useEffect hook. The cleanup function is called when the component is unmounted or when the dependencies of the useEffect hook change.
  useEffect(() => {
    console.log("useEffect Called")
    const timer = setInterval(() => setCount(prevCount => prevCount +1), 1000); // This will increment the count every second.

    return () => {
      console.log("useEffect Cleanup Called")
      clearInterval(timer); // This will clear the interval when the component is unmounted or when the dependencies of the useEffect hook change.
    }
  }, [])

  return (
    <>
      <section>
        <h1>useEffect Cleanup Function</h1>
        <p>
          The cleanup function is a function that is returned from the useEffect
          hook. It is used to clean up any side effects that were created in the
          useEffect hook. The cleanup function is called when the component is
          unmounted or when the dependencies of the useEffect hook change.
        </p>

        <h3>{count}</h3>
      </section>
    </>
  )
}

export default App