// src/assets/components/Topbar.jsx
import React from "react";
import { useUser } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

const Topbar = () => {
  const { user, logout } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="topbar" style={{ padding: "10px", backgroundColor: "#eee" }}>
      {user ? (
        <>
          <span>Welcome, {user.name}!</span>
          <button onClick={handleLogout} style={{ marginLeft: 10 }}>
            Logout
          </button>
        </>
      ) : (
        <span>Please log in</span>
      )}
    </div>
  );
};

export default Topbar;
