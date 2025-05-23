// src/components/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

const ProtectedRoute = ({ children, adminOnly }) => {
  const { user } = useUser();

  if (!user) {
    // Not logged in, redirect to login
    return <Navigate to="/login" />;
  }

  if (adminOnly && !user.isAdmin) {
    // Logged in but not admin, redirect to user dashboard
    return <Navigate to="/dashboard" />;
  }

  if (!adminOnly && user.isAdmin) {
    // Logged in as admin but trying to access user route, redirect to admin dashboard
    return <Navigate to="/admin" />;
  }

  return children;
};

export default ProtectedRoute;
