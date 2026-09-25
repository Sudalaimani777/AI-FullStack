import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage, CartPage, SignupPage, SigninPage } from "../pages/index";


export const AppRoutes: React.FC = () => {

  const route = [
    { id: 1, path: "/", element: <HomePage /> },
    { id: 2, path: "/cart", element: <CartPage /> },
    { id: 3, path: "/signin", element: <SigninPage /> },
    { id: 4, path: "/signup", element: <SignupPage /> },
    { id: 5, path: "/login", element: <Navigate to="/signin" replace /> },
    { id: 6, path: "/register", element: <Navigate to="/signup" replace /> },
  ];

  return (
    <>
      <Routes>
        {
          route.map(e => (
            <Route key={e.id} path={e.path} element={e.element} />
          ))
        }
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
};
