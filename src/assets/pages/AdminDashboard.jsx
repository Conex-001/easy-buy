import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import "./Dashboard.css";

const AdminDashboard = () => {
  // Simulated admin data
  const [totalUsers, setTotalUsers] = useState(2);
  const [totalOrders, setTotalOrders] = useState(0);
  const [totalProducts, setTotalProducts] = useState(14);

  // Mock data arrays
  const initialProducts = [
    { id: 1, name: "iPhone 13", price: 1000000 },
    { id: 2, name: "Samsung Galaxy S23", price: 1050000 },
    { id: 3, name: "MacBook Pro", price: 3700000 },
  ];

  const initialUsers = [
    { id: 1, name: "Nathan Kio", email: "Nathangmail.com" },
    { id: 2, name: "Ayo soccer", email: "Ayo@gmail.com" },
  ];

  const [productList, setProductList] = useState(initialProducts);
  const [userList, setUserList] = useState(initialUsers);

  const navigate = useNavigate();

  // Handlers for deletes
  const deleteProduct = (id) => {
    setProductList(productList.filter((p) => p.id !== id));
    setTotalProducts((prev) => prev - 1);
  };

  const deleteUser = (id) => {
    setUserList(userList.filter((u) => u.id !== id));
    setTotalUsers((prev) => prev - 1);
  };

  // Components for each section
  const Overview = () => (
    <>
      <div className="admin-overview">
        <div className="admin-card">
          <h2>{totalUsers}</h2>
          <p>Total Users</p>
        </div>
        <div className="admin-card">
          <h2>{totalOrders}</h2>
          <p>Total Orders</p>
        </div>
        <div className="admin-card">
          <h2>{totalProducts}</h2>
          <p>Total Products</p>
        </div>
      </div>

      <div className="admin-actions">
        <h2>Quick Actions</h2>
        <button
          className="admin-btn"
          onClick={() => navigate("/admin/products")}
        >
          View All Products
        </button>
        <button
          className="admin-btn"
          onClick={() => navigate("/admin/manage-products")}
        >
          Manage Products
        </button>
        <button
          className="admin-btn"
          onClick={() => navigate("/admin/manage-users")}
        >
          Manage Users
        </button>
      </div>
    </>
  );

  const ProductsList = () => (
    <div className="products-list">
      <h2>All Products</h2>
      {productList.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <ul>
          {productList.map((product) => (
            <li key={product.id}>
              {product.name} - ₦{product.price.toLocaleString()}
            </li>
          ))}
        </ul>
      )}
      <button onClick={() => navigate("/admin")}>Back</button>
    </div>
  );

  const ManageProducts = () => (
    <div className="manage-products">
      <h2>Manage Products</h2>
      {productList.length === 0 ? (
        <p>No products to manage.</p>
      ) : (
        <ul>
          {productList.map((product) => (
            <li key={product.id}>
              {product.name} - ₦{product.price.toLocaleString()}
              <button
                style={{
                  marginLeft: "10px",
                  backgroundColor: "red",
                  color: "white",
                }}
                onClick={() => deleteProduct(product.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
      <button onClick={() => navigate("/admin")}>Back</button>
    </div>
  );

  const ManageUsers = () => (
    <div className="manage-users">
      <h2>Manage Users</h2>
      {userList.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <ul>
          {userList.map((user) => (
            <li key={user.id}>
              {user.name} ({user.email})
              <button
                style={{
                  marginLeft: "10px",
                  backgroundColor: "red",
                  color: "white",
                }}
                onClick={() => deleteUser(user.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
      <button onClick={() => navigate("/admin")}>Back</button>
    </div>
  );

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <Topbar />
        <main>
          <h1>Welcome, Admin</h1>
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="products" element={<ProductsList />} />
            <Route path="manage-products" element={<ManageProducts />} />
            <Route path="manage-users" element={<ManageUsers />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
