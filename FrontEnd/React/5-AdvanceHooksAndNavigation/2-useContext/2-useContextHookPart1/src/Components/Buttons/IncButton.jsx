import { useContext } from "react"
import CounterContext from "../../Context/CounterContext"
import Button from "../Shared/Button"


const IncButton = () => {

  const {handleInc} = useContext(CounterContext);

  return (
    <>
        <Button onClick={handleInc}>+</Button>
    </>
  )
}

export default IncButton