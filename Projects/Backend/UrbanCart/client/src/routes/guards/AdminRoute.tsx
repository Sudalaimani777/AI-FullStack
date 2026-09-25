import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuthStore } from '../../store/useAuthStore';
import { Loader2 } from 'lucide-react';




const AdminRoute: React.FC = () => {
    const { isLoading, user } = useAuthStore();
    const location = useLocation();

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#fbf9f5]">
                <Loader2 className="w-8 h-8 animate-spin text-[#e45a2a]" />
            </div>
        );
    }

    if (!user) {
        return <Navigate to="/signin" state={{ from: location }} replace />
    }

    if (user.is_admin === true) {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
}

export default AdminRoute;