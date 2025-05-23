import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import "./Sidebar.css"; // We'll add styles later

const Sidebar = ({ setActiveSection }) => {
  const { user } = useUser();

  return (
    <div className="sidebar">
      <div className="sidebar-logo">{user.isAdmin ? "Easy-Buy Admin" : "Easy-Buy User"}</div>
      <nav>
        {user.isAdmin ? (
          <>
            <Link to="/admin">Dashboard</Link>
            <Link to="/admin/products">Products</Link>
            <Link to="/admin/orders">Orders</Link>
            <Link to="/admin/users">Users</Link>
          </>
        ) : (
          <>
            {/* For user, call setActiveSection to switch sections in UserDashboard */}
            <button
              type="button"
              className="sidebar-button"
              onClick={() => setActiveSection("checkout")}
            >
              Checkout
            </button>
            <button
              type="button"
              className="sidebar-button"
              onClick={() => setActiveSection("orders")}
            >
              My Orders
            </button>
            <button
              type="button"
              className="sidebar-button"
              onClick={() => setActiveSection("profile")}
            >
              My Profile
            </button>
          </>
        )}
      </nav>
    </div>
  );
};

export default Sidebar;
