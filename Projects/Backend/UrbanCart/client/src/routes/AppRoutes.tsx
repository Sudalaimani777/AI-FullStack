import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage, CartPage, SignupPage, SigninPage, AdminDashboardPage, ProfilePage, ProductDetailsPage, CheckoutPage, OrderConfirmationPage } from "../pages/index";
// Protected Routes :-
import { AdminRoute, GuestRoute, ProtectedRoute } from "./guards/index";


export const AppRoutes: React.FC = () => {

  return (
    <>
      <Routes>

        {/* 1. PUBLIC ROUTES */}
        <Route path="/" element={<HomePage />} />
        <Route path="/mobile" element={<HomePage />} />
        <Route path="/catalog" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/order-confirmation/:id" element={<OrderConfirmationPage />} />
        <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
        <Route path="/order-success" element={<OrderConfirmationPage />} />

        {/* 2. GUEST-ONLY ROUTES (Redirects authenticated users away) */}
        <Route element={<GuestRoute />}>
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<Navigate to="/signin" replace />} />
          <Route path="/register" element={<Navigate to="/signup" replace />} />
        </Route>

        {/* 3. AUTHENTICATED USER ROUTES */}
        <Route element={<ProtectedRoute />}>
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
