import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuthStore } from '../../store/useAuthStore';
import { Loader2 } from 'lucide-react';
import React from 'react';

const GuestRoute: React.FC = () => {

    const { user, isLoading } = useAuthStore();
    const location = useLocation();
    const from = (location.state as { from?: { pathname: string } })?.from?.pathname || '/';

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[#fbf9f5]">
                <Loader2 className="w-8 h-8 animate-spin text-[#e45a2a]" />
            </div>
        );
    }

    if (user) {
        return <Navigate to={from} replace />;
    }
    return <Outlet />;
}

export default GuestRoute;