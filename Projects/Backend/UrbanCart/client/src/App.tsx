import React, { useEffect } from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AppRoutes } from './routes/AppRoutes';
import StorefrontHeader from './components/layout/StorefrontHeader';
import StorefrontFooter from './components/layout/StorefrontFooter';
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
  const isAdminPage = normalizedPath.startsWith('/admin');

  // Do not wrap Auth pages, Admin dashboard, Mobile Storefront, or Mobile Product Details in the desktop Navbar/Footer
  const isMobilePage =
    normalizedPath === '/' ||
    normalizedPath === '/mobile' ||
    normalizedPath.startsWith('/product');
  if (isAuthPage || isAdminPage || isMobilePage) {
    return <AppRoutes />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-surface font-body-md text-body-md text-on-surface antialiased selection:bg-status-peach-bg selection:text-status-peach-text">
      <StorefrontHeader />
      <main className="flex-1 w-full pt-0 md:pt-20 bg-surface">
        <AppRoutes />
      </main>
      <StorefrontFooter />
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
