import { useReducer } from "react";
import { createContext } from "react";
import { counterReducer } from "../Reducer/counterReducer";


const CounterContext = createContext();


export const CounterProvider = ({ children }) => {

    const initialCount = {
        count: 0
    }

    const [{ count }, counterDispatch] = useReducer(counterReducer, initialCount);

    const handleInc = () => {
        counterDispatch({
            type: "INC"
        })
    }

    const handleDec = () => {
        counterDispatch({
            type: "DEC"
        })
    }

    return (
        <CounterContext.Provider value={{ count, counterDispatch, handleInc, handleDec }}>
            {children}
        </CounterContext.Provider>
    )
}

export default CounterContext