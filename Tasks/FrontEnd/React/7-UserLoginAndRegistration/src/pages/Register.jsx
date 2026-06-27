import { useContext } from "react"
import UserRegisterContext from "../context/UserRegisterContext"


const Register = () => {

  const { userDetails, handleUserInputChange, handleUserRegistration } = useContext(UserRegisterContext);
  console.log(userDetails)

  return (
    <>
      <section>
        <form onSubmit={handleUserRegistration}>
          <input type="text" name="userName" value={userDetails.userName} onChange={handleUserInputChange} />
          <input type="text" name="userEmail" value={userDetails.userEmail} onChange={handleUserInputChange} />
          <input type="text" name="userPassword" value={userDetails.userPassword} onChange={handleUserInputChange} />
          <button>Register</button>
        </form>
      </section>
    </>
  )
}

export default Register