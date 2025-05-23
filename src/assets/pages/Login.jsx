// src/assets/pages/Login.jsx
import React from "react";
import { useUser } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useUser();
  const navigate = useNavigate();

  const handleLogin = (role) => {
    if (role === "admin") {
      login("adminUser");
      navigate("/admin");
    } else {
      login("normalUser");
      navigate("/dashboard");
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Login</h2>
      <button onClick={() => handleLogin("admin")} style={{ marginRight: 10 }}>
        Login as Admin
      </button>
      <button onClick={() => handleLogin("user")}>Login as User</button>
    </div>
  );
};

export default Login;
