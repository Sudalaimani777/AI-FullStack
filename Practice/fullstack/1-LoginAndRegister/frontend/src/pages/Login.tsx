import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/user-auth.store'


const Login: React.FC = () => {

    const [userLoginData, setUserLoginData] = useState({ userEmail: "", userPassword: "" });

    const { login, error, clearError, isLoading } = useAuthStore();
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserLoginData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        clearError();
        const success = await login(userLoginData);

        if (success) {
            navigate("/dashboard");
            return;
        }
    }


    return (
        <>
            <div style={{ maxWidth: "350px", margin: "40px auto" }}>
                <h2>Login</h2>
                {error && <p style={{ color: "red" }}>{error}</p>}
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    <input
                        type="email"
                         name="userEmail"
                        placeholder="Email Address"
                        value={userLoginData.userEmail}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="userPassword"
                        placeholder="Password"
                        value={userLoginData.userPassword}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit" disabled={isLoading}>
                        {isLoading ? "Logging in..." : "Sign In"}
                    </button>
                </form>
                <p style={{ marginTop: "10px" }}>
                    Don't have an account? <Link to="/register">Register here</Link>
                </p>
            </div>
        </>
    )
}

export default Login