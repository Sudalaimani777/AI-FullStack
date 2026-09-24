import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag, ShoppingCart, User as UserIcon, LogOut, ShieldCheck } from 'lucide-react';
import { useCartStore } from '../../store/useCartStore';
import { useAuthStore } from '../../store/useAuthStore';

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const totalItems = useCartStore((state) => state.getTotalItems());
  const { user, token, logout, isAdmin } = useAuthStore();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-md shadow-indigo-200 transition-transform group-hover:scale-105">
            <ShoppingBag className="w-5 h-5" />
          </div>
          <span className="text-xl font-bold text-slate-900 tracking-tight">
            Urban<span className="text-indigo-600">Cart</span>
          </span>
        </Link>

        {/* Navigation links */}
        <nav className="flex items-center gap-6">
          <Link
            to="/"
            className="text-sm font-medium text-slate-700 hover:text-indigo-600 transition-colors"
          >
            Catalog
          </Link>

          {isAdmin() && (
            <Link
              to="/admin/products"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-amber-600 hover:text-amber-700 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200"
            >
              <ShieldCheck className="w-4 h-4" />
              Admin
            </Link>
          )}

          {/* Cart Icon */}
          <Link
            to="/cart"
            className="relative p-2 text-slate-700 hover:text-indigo-600 transition-colors"
            aria-label="View Cart"
          >
            <ShoppingCart className="w-6 h-6" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-sm">
                {totalItems}
              </span>
            )}
          </Link>

          {/* User Section */}
          {token && user ? (
            <div className="flex items-center gap-3 pl-2 border-l border-slate-200">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-300 flex items-center justify-center text-slate-700 font-semibold text-xs">
                  {user.avatar ? (
                    <img
                      src={user.avatar}
                      alt={user.user_name}
                      className="w-full h-full rounded-full object-cover"
                    />
                  ) : (
                    user.user_name.slice(0, 2).toUpperCase()
                  )}
                </div>
                <span className="text-sm font-medium text-slate-700 hidden sm:inline">
                  {user.user_name}
                </span>
              </div>
              <button
                onClick={handleLogout}
                className="p-1.5 text-slate-400 hover:text-rose-600 transition-colors rounded-lg hover:bg-rose-50"
                title="Log out"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link
                to="/login"
                className="inline-flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-indigo-600 px-3 py-1.5 rounded-lg transition-colors"
              >
                <UserIcon className="w-4 h-4" />
                Sign In
              </Link>
              <Link
                to="/register"
                className="text-sm font-medium bg-indigo-600 hover:bg-indigo-700 text-white px-3.5 py-1.5 rounded-lg shadow-sm transition-colors"
              >
                Sign Up
              </Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};
