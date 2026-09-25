import React, { useEffect } from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppRoutes } from './routes/AppRoutes';
import Navbar from './components/layout/Navbar';
import { useAuthStore } from './store/useAuthStore';



const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

const MainLayout: React.FC = () => {
  const location = useLocation();
  const checkAuth = useAuthStore((state) => state.checkAuth);

  // Trigger auth check on app load
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  const normalizedPath = location.pathname.toLowerCase().replace(/\/+$/, '') || '/';
  const isAuthPage = ['/signin', '/signup', '/login', '/register'].includes(normalizedPath);

  if (isAuthPage) {
    return <AppRoutes />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar />
      <main className="flex-1">
        <AppRoutes />
      </main>
      <footer className="bg-white border-t border-slate-200 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} UrbanCart. All rights reserved.
      </footer>
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <MainLayout />
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
