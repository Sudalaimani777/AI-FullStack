import { Routes, Route } from "react-router-dom"
import { Dashboard, Login, Register } from "../pages"

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </>
    )
}

export default AppRoutes