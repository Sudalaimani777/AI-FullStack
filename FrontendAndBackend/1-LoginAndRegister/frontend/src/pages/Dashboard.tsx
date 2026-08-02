import React from 'react'
import { useAuthStore } from '../store/user-auth.store'
import { useNavigate } from 'react-router-dom'


const Dashboard: React.FC = () => {

  const { user, logout } = useAuthStore()
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  }

  return (
    <>
      <div style={{ maxWidth: "400px", margin: "40px auto" }}>
        <h2>Dashboard</h2>
        <p>Welcome, <strong>{user?.["user-name"]}</strong>!</p>
        <p>Email: {user?.["user-email"]}</p>
        <button onClick={handleLogout} style={{ marginTop: "15px" }}>
          Logout
        </button>
      </div>
    </>
  )
}

export default Dashboard