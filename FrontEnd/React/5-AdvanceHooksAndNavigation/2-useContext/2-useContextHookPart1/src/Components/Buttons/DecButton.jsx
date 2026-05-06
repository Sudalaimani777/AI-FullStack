import { useContext } from "react"
import CounterContext from "../../Context/CounterContext"
import Button from "../Shared/Button"


const DecButton = () => {

  const {handleDec} = useContext(CounterContext);

  return (
    <>
        <Button onClick={handleDec}>-</Button>    
    </>
  )
}

export default DecButton