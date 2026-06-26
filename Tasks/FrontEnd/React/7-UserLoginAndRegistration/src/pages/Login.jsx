import { useContext } from 'react'
import UserLoginContext from '../context/UserLoginContext'

const Login = () => {
  const {handleUserLogin, handleUserLoginInputChange, loginUserDetails} = useContext(UserLoginContext)
  return (
    <>
       <section>
          <form onSubmit={handleUserLogin}>
            <input type="text" name="userEmail" value={loginUserDetails.userEmail} onChange={handleUserLoginInputChange}/>
            <input type="text" name="userPassword" value={loginUserDetails.userPassword} onChange={handleUserLoginInputChange}/>
            <button>Register</button>
          </form>
        </section>
    </>
  )
}

export default Login