import Button from "../../Shared/Button"


const DecButton = ({handleDec}) => {
  return (
    <>
        <Button onClick={handleDec}>
            Dec
        </Button>
    </>
  )
}

export default DecButton