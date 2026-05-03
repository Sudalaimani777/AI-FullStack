import { useRef, useState } from "react"


const StopWatch = () => {
    const [count, setCount] = useState(0);
    const stopWatchRef = useRef(0);

    const handleStart = () => {
        stopWatchRef.current = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000)
        console.log(stopWatchRef);
    }

    const handleStop = () => {
        clearInterval(stopWatchRef.current);
        console.log(stopWatchRef.current);
    }

  return (
    <>
        <section>
            <h1>{count}</h1>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </section>
    </>
  )
}

export default StopWatch