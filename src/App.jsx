import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Navbar from "./assets/components/Navbar";
import Footer from "./assets/components/Footer";

import HomePage from "./assets/pages/HomePage";
import ProductPage from "./assets/pages/ProductPage";
import CartPage from "./assets/pages/CartPage";

import AdminDashboard from "./assets/pages/AdminDashboard";
import UserDashboard from "./assets/pages/UserDashboard";

import Login from "./assets/pages/Login";
import Register from "./assets/pages/Register"; // ✅ Register Page import

import { UserProvider, useUser } from "./context/UserContext";
import { CartProvider } from "./context/CartContext";

// Route protection logic
const PrivateRoute = ({ children, adminOnly = false }) => {
  const { user } = useUser();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (adminOnly && !user.isAdmin) {
    return <Navigate to="/dashboard" replace />;
  }

  if (!adminOnly && user.isAdmin) {
    return <Navigate to="/admin" replace />;
  }

  return children;
};

const App = () => {
  return (
    <UserProvider>
      <CartProvider>
        <Router>
          <div className="app-container">
            <Navbar />

            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<HomePage />} />
              <Route path="/product/:id" element={<ProductPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} /> {/* ✅ Register route added */}

              {/* Protected Routes */}
              <Route
                path="/admin/*"
                element={
                  <PrivateRoute adminOnly={true}>
                    <AdminDashboard />
                  </PrivateRoute>
                }
              />
              <Route
                path="/dashboard/*"
                element={
                  <PrivateRoute adminOnly={false}>
                    <UserDashboard />
                  </PrivateRoute>
                }
              />

              {/* Catch all unmatched routes */}
              <Route path="*" element={<Navigate to="/login" replace />} />
            </Routes>

            <Footer />
          </div>
        </Router>
      </CartProvider>
    </UserProvider>
  );
};

export default App;
