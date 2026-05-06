import Button from "../../Shared/Button"


const ResetButton = ({handleReset}) => {
  return (
    <>
        <Button onClick={handleReset}>
            Reset
        </Button>
    </>
  )
}

export default ResetButton