import React, { useState } from 'react'
import { useAuthStore } from '../store/user-auth.store';
import { Link, useNavigate } from 'react-router-dom';

const Register: React.FC = () => {

    const [userData, setUserData] = useState({ userName: "", userEmail: "", userPassword: "" });
    const [successMessage, setSuccessMessage] = useState("");

    const { register, isLoading, error, clearError } = useAuthStore();

    const navigate = useNavigate();


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUserData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        clearError();
        setSuccessMessage("");

        const success = await register(userData);
        if (success) {
            setSuccessMessage("User Registered Successfully!");
            setTimeout(() => navigate("/login"), 1500);
            return;
        }
    }

    return (
        <>
            <div style={{ maxWidth: "350px", margin: "40px auto" }}>
                <h2>Register</h2>
                {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
                {error && <p style={{ color: "red" }}>{error}</p>}
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                    <input
                        type="text"
                        name="userName"
                        placeholder="User Name"
                        value={userData.userName}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="userEmail"
                        placeholder="Email Address"
                        value={userData.userEmail}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="userPassword"
                        placeholder="Password"
                        value={userData.userPassword}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit" disabled={isLoading}>
                        {isLoading ? "Signing Up..." : "Sign Up"}
                    </button>
                </form>
                <p style={{ marginTop: "10px" }}>
                    Already have an account? <Link to="/login">Login here</Link>
                </p>
            </div>
        </>
    )
}

export default Register