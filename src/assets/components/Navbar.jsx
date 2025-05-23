import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useUser } from "../../context/UserContext";
import EasyBuyLogo from "../components/EasyBuyLogo"; // Text logo component
import "./Navbar.css";

const Navbar = () => {
  const { cartItems } = useCart();
  const { user, login, logout } = useUser();
  const [showDropdown, setShowDropdown] = useState(false);
  const [identifier, setIdentifier] = useState("");

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleLogin = () => {
    if (identifier.trim()) {
      login(identifier);
      setIdentifier("");
      setShowDropdown(false);
    }
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo-container">
        <EasyBuyLogo />
      </Link>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li>
          <Link to="/cart" className="cart-link">
            Cart 🛒
            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
          </Link>
        </li>

        <li className="account-dropdown">
          <span onClick={() => setShowDropdown(!showDropdown)}>Account ⬇</span>
          {showDropdown && (
            <div className="dropdown-menu">
              {!user ? (
                <>
                  <p className="dropdown-title">Login to your Easy Buy account</p>
                  <input
                    type="text"
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    placeholder="Email or Phone"
                  />
                  <button onClick={handleLogin}>Continue</button>
                </>
              ) : (
                <>
                  <p className="dropdown-title">Welcome, {user.name}</p>
                  {user.isAdmin ? (
                    <Link to="/admin" className="dropdown-link">Admin Dashboard</Link>
                  ) : (
                    <Link to="/dashboard" className="dropdown-link">User Dashboard</Link>
                  )}
                  <button className="logout-btn" onClick={logout}>Logout</button>
                </>
              )}
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
