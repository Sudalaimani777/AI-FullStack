// import { useReducer } from "react";
import { createContext, useState } from "react";


const CounterContext = createContext();

export const CounterProvider = ({children}) => {

    const [count, setCount] = useState(0);

    const handleInc = () => setCount(prevCount => prevCount + 1)
    const handleDec = () => setCount(prevCount => prevCount - 1)
    const handleReset = () => setCount(0);

    // const [count, dispatchCount] = useReducer(countReducerFunc, initialState);x

    return (
        <CounterContext.Provider value={{count, handleInc, handleDec, handleReset}}>
            {children}
        </CounterContext.Provider>
    )
}

export default CounterContext;