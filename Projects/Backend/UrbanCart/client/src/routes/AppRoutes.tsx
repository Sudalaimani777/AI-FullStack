import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage, CartPage, SignupPage, SigninPage, AdminDashboardPage, ProfilePage } from "../pages/index";
// Protected Routes :-
import { AdminRoute, GuestRoute, ProtectedRoute } from "./guards/index";


export const AppRoutes: React.FC = () => {

  return (
    <>
      <Routes>

        {/* 1. PUBLIC ROUTES */}
        <Route path="/" element={<HomePage />} />

        {/* 2. GUEST-ONLY ROUTES (Redirects authenticated users away) */}
        <Route element={<GuestRoute />}>
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<Navigate to="/signin" replace />} />
          <Route path="/register" element={<Navigate to="/signup" replace />} />
        </Route>

        {/* 3. AUTHENTICATED USER ROUTES */}
        <Route element={<ProtectedRoute />}>
          <Route path="/cart" element={<CartPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/account" element={<Navigate to="/profile" replace />} />
        </Route>

        {/* 4. ADMIN-ONLY ROUTES */}
        <Route element={<AdminRoute />}>
          <Route path="/admin" element={<AdminDashboardPage />} />
          {/* Add more admin routes here, e.g. /admin/products */}
        </Route>
        
        {/* 5. CATCH-ALL */}
        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </>
  );
};
