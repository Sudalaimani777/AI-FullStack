import { useContext } from "react"
import CounterContext from "../../Context/CounterContext"
import Button from "../Shared/Button"


const ResetButton = () => {
   
    const {handleReset} = useContext(CounterContext);

  return (
    <>
        <Button onClick={handleReset}>Reset</Button>
    </>
  )
}

export default ResetButton