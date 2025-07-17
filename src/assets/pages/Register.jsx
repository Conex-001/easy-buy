import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // 🔄 Import navigate

const Register = () => {
  const navigate = useNavigate(); // 🔄 Initialize navigate

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setMessage("❌ Passwords do not match");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/register", formData);
      setMessage("✅ Registration successful! Redirecting...");

      // Clear form
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
      });

      // Redirect to login after short delay
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      setMessage("❌ Error: " + (err.response?.data?.message || "Something went wrong"));
    }
  };

  return (
    <div className="register-form">
      <h2>Create Your Easy Buy Account</h2>
      {message && <p>{message}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
