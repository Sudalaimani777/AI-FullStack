import { useContext } from "react"
import AuthContext from "../../Context/AuthContext"


const Login = () => {

    const { isLoggedIn, handleIsLoggedIn } = useContext(AuthContext);

    return (
        <>
            <section>
                <h2>Login</h2>
                {
                    !isLoggedIn && <label htmlFor="">
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" />
                    </label>
                }
                <button onClick={handleIsLoggedIn}>{isLoggedIn ? 'Logout' : 'Login'}</button>
            </section>
        </>
    )
}

export default Login