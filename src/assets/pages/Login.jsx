import React, { useState } from "react";
import { useUser } from "../../context/UserContext";
import { useNavigate, Link } from "react-router-dom"; // ✅ Imported Link

const defaultUsers = [
  {
    identifier: "Confidence@gmail.com",
    password: "admin123",
    name: "Admin User",
    isAdmin: true,
  },
  {
    identifier: "Conex@gmail.com",
    password: "user123",
    name: "Normal User",
    isAdmin: false,
  },
];

const getAllUsers = () => {
  const storedUsers = JSON.parse(localStorage.getItem("easyBuyUsers")) || [];
  return [...defaultUsers, ...storedUsers];
};

const Login = () => {
  const { login } = useUser();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({ identifier: "", password: "" });
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    setTimeout(() => {
      const allUsers = getAllUsers();
      const matchedUser = allUsers.find(
        (user) =>
          user.identifier === formData.identifier &&
          user.password === formData.password
      );

      if (!matchedUser) {
        setError("No user found. Please register.");
        setLoading(false);
        return;
      }

      login(matchedUser);

      if (rememberMe) {
        localStorage.setItem("easyBuyUser", JSON.stringify(matchedUser));
      } else {
        localStorage.removeItem("easyBuyUser");
      }

      setLoading(false);
      navigate(matchedUser.isAdmin ? "/admin" : "/dashboard");
    }, 1000);
  };

  return (
    <div className="login-container" style={styles.container}>
      <h2 style={styles.title}>Login to Easy Buy</h2>

      {error && <p style={styles.error}>{error}</p>}

      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          name="identifier"
          placeholder="Email or Phone"
          value={formData.identifier}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          style={styles.input}
        />

        <label style={styles.rememberMeLabel}>
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={() => setRememberMe((prev) => !prev)}
          />{" "}
          Remember Me
        </label>

        <button type="submit" disabled={loading} style={styles.button}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      <p style={{ marginTop: 15, fontSize: 14 }}>
        {/* <strong>Test Users:</strong><br /> */}
        {/* <span>Admin → Mike@gmail.com / admin123</span><br /> */}
        {/* <span>User → Conex@gmail.com / user123</span> */}
      </p>

      {/* ✅ Register link */}
      <p style={{ marginTop: 20, fontSize: 14, textAlign: "center" }}>
        Don't have an account?{" "}
        <Link to="/register" style={{ color: "#007bff", textDecoration: "underline" }}>
          Register here
        </Link>
      </p>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: 400,
    margin: "50px auto",
    padding: 20,
    border: "1px solid #ccc",
    borderRadius: 6,
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    backgroundColor: "#fff",
  },
  title: {
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  error: {
    color: "red",
    marginBottom: 10,
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: 10,
    marginBottom: 15,
    borderRadius: 4,
    border: "1px solid #ccc",
    fontSize: 16,
  },
  rememberMeLabel: {
    marginBottom: 15,
    fontSize: 14,
    userSelect: "none",
  },
  button: {
    padding: 12,
    fontSize: 16,
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: 4,
    cursor: "pointer",
  },
};

export default Login;
