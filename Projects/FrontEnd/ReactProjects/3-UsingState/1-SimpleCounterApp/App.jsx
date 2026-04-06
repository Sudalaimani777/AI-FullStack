import React from "react"

export default function App() {
    const [count, setCount] = React.useState(0)

    /**
     * Note: if you ever need the old value of state
     * to help you determine the new value of state,
     * you should pass a callback function to your
     * state setter function instead of using
     * state directly. This callback function will
     * receive the old value of state as its parameter,
     * which you can then use to determine your new
     * value of state.
     */

    //     1. You have 2 options for what you can pass in to a
    //    state setter function (e.g. `setCount`). What are they?
    //    1. Pass the new version of state that we want to use as the 
    //       replacement for the old version of state.
    //    2. Pass a callback function. Must return what we want the new
    //       value of state to be. Will receive the old version of state
    //       as a parameter so we can use it to help determine what we want 
    //       the new value of state to be.


    // 2. When would you want to pass the first option (from answer
    //    above) to the state setter function?

    //    Whenever we don't really care about (or need) the old value,
    //    we simply want to set a new value.


    // 3. When would you want to pass the second option (from answer
    //    above) to the state setter function?

    //    Whenever we do care about the previous value in state and need
    //    it to help us determine what the new value should be.


    const add = () => setCount(prevCount => prevCount + 1);

    const subtract = () => setCount(prevCount => prevCount - 1);

    return (
        <main className="container">
            <h1>How many times will Bob say "state" in this section?</h1>
            <div className="counter">
                <button className="minus" onClick={subtract} aria-label="Decrease count">–</button>
                <h2 className="count">{count}</h2>
                <button className="plus" onClick={add} aria-label="Increase count">+</button>
            </div>
        </main>
    )
}
