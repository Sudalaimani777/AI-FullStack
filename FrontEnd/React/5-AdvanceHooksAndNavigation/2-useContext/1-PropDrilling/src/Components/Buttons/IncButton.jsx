import Button from "../Shared/Button"


const IncButton = ({handleInc}) => {
  return (
    <>
      <Button onClick={handleInc}>
        Inc
      </Button>
    </>
  )
}

export default IncButton