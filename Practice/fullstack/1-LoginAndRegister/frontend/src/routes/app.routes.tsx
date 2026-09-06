import { Navigate, Route, Routes, } from "react-router-dom";
import { Login, Register, Dashboard } from "../pages/index";
import { useAuthStore } from "../store/user-auth.store";
import type { ReactNode } from "react"; // or import React from "react"

const ProtectedRoutes = ({ children }: { children: ReactNode }) => { // here {children: React.JSX.Element}
    const isAuthenticated = useAuthStore(state => state.isAuthenticated);
    return isAuthenticated ? children : <Navigate to="/login" replace />
}



const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Navigate to="/login" replace />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoutes>
                            <Dashboard />
                        </ProtectedRoutes>
                    }

                />
            </Routes>
        </>
    )
}

export default AppRoutes