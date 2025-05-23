import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import "./Dashboard.css";
import { useCart } from "../../context/CartContext";

const UserDashboard = () => {
  const { cartItems } = useCart();

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const [activeSection, setActiveSection] = useState("checkout");

  // Simulated user profile
  const userProfile = {
    firstName: "Confidence",
    lastName: "Viz",
    email: "Confidence@gmail.com",
    address: "123 Tech Avenue, Rumumasi, Port Harcourt",
    phone: "+2347042075583",
  };

  // Simulated orders
  const orders = [
    // Example orders can be uncommented or added here for demo
    // { id: 1, product: "iPhone 13 Pro", status: "Delivered" },
    // { id: 2, product: "Samsung Galaxy A73", status: "Ongoing" },
    // { id: 3, product: "MacBook Pro", status: "Canceled" },
  ];

  const ongoingDeliveredCount = orders.filter(
    (o) => o.status === "Ongoing" || o.status === "Delivered"
  ).length;

  const canceledReturnedCount = orders.filter(
    (o) => o.status === "Canceled" || o.status === "Returned"
  ).length;

  const handleCheckout = () => {
    const paystackModal = document.getElementById("paystack-modal");
    if (paystackModal) paystackModal.style.display = "flex";
  };

  const closeModal = () => {
    const paystackModal = document.getElementById("paystack-modal");
    if (paystackModal) paystackModal.style.display = "none";
  };

  return (
    <div className="dashboard-container">
      {/* Pass setActiveSection so Sidebar can update the section */}
      <Sidebar setActiveSection={setActiveSection} />
      <div className="dashboard-content">
        <Topbar />

        <main>
          <h1>User Dashboard</h1>

          {/* Optional: you can remove this dashboard-nav since Sidebar handles navigation */}
          {/* <div className="dashboard-nav">
            <button onClick={() => setActiveSection("checkout")}>Checkout</button>
            <button onClick={() => setActiveSection("profile")}>Profile</button>
            <button onClick={() => setActiveSection("orders")}>Orders</button>
          </div> */}

          {activeSection === "checkout" && (
            <div className="checkout-box">
              <h2>Checkout</h2>
              <p>Total Amount: ₦{totalAmount.toLocaleString()}</p>
              <button className="checkout-btn" onClick={handleCheckout}>
                Proceed to Payment
              </button>
            </div>
          )}

          {activeSection === "profile" && (
            <div className="profile-section">
              <h2>Account Details</h2>
              <p>
                <strong>First Name:</strong> {userProfile.firstName}
              </p>
              <p>
                <strong>Last Name:</strong> {userProfile.lastName}
              </p>
              <p>
                <strong>Email:</strong> {userProfile.email}
              </p>
              <p>
                <strong>Phone:</strong> {userProfile.phone}
              </p>
              <p>
                <strong>Default Shipping Address:</strong> {userProfile.address}
              </p>
            </div>
          )}

          {activeSection === "orders" && (
            <div className="orders-section">
              <h2>Orders Summary</h2>
              {ongoingDeliveredCount === 0 && canceledReturnedCount === 0 ? (
                <p>No orders to display yet.</p>
              ) : (
                <>
                  {ongoingDeliveredCount > 0 && (
                    <p>
                      <strong>Ongoing / Delivered Orders:</strong> {ongoingDeliveredCount}
                    </p>
                  )}
                  {canceledReturnedCount > 0 && (
                    <p>
                      <strong>Canceled / Returned Orders:</strong> {canceledReturnedCount}
                    </p>
                  )}
                </>
              )}
            </div>
          )}

          <div
            id="paystack-modal"
            style={{
              display: "none",
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 1000,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                background: "white",
                padding: "30px",
                borderRadius: "10px",
                maxWidth: "400px",
                margin: "0 auto",
                textAlign: "center",
              }}
            >
              <h3>Paystack Payment</h3>
              <p>Confirm to proceed with payment of ₦{totalAmount.toLocaleString()}</p>
              <button
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#05a",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  marginRight: "10px",
                }}
                onClick={() => alert("Payment successful (simulated)!")}
              >
                Pay Now
              </button>
              <button
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#ccc",
                  border: "none",
                  borderRadius: "5px",
                }}
                onClick={closeModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserDashboard;
