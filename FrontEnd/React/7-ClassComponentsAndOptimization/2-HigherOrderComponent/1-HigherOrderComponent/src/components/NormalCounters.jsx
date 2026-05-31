import {useState} from "react"

export const NormalCounter1 = () => {

    const [count, setCount] = useState(0)

    const handleClick = () => setCount(prevCount => prevCount + 1);

    return (
        <>
            <section>
                <h1>Normal Counter 1</h1>
                <h2>Count: {count}</h2>
                <button onClick={handleClick}>Inc</button>
            </section>
        </>
    )
}

export const NormalCounter2 = () => {
    const [count, setCount] = useState(0)

    const handleClick = () => setCount(prevCount => prevCount + 1);
    return (
        <>
            <section>
                <h1>Normal Counter 2</h1>
                <h2>Count: {count}</h2>
                <button onClick={handleClick}>Inc</button>
            </section>
        </>
    )
}