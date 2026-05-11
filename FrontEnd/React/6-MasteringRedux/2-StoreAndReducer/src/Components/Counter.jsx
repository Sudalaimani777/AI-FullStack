import { useDispatch, useSelector } from "react-redux"
import { handleDec, handleInc } from "../Slices/counterSlice";

const Counter = () => {

    const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();

    const handleAdd = () => {
        dispatch(handleInc());
    }

    const handleMinus = () => {
        dispatch(handleDec())
    }

  return (
    <>
        <section>
            <h2>Counter</h2>
            <h4>{count}</h4>
            <button onClick={handleAdd}>+</button>
            <button onClick={handleMinus}>-</button>
        </section>
    </>
  )
}

export default Counter