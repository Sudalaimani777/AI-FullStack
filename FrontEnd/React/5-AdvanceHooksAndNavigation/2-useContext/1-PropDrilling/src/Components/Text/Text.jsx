import DecButton from "../Buttons/DecButton"
import IncButton from "../Buttons/IncButton"
import ResetButton from "../Buttons/ResetButton"

const Text = ({count, handleInc, handleDec, handleReset}) => {
  return (
    <>
        <section>
            <h4>The count is {count}</h4>
            <IncButton handleInc={handleInc}/>
            <ResetButton handleReset={handleReset}/>
            <DecButton handleDec={handleDec}/>
        </section>
    </>
  )
}

export default Text