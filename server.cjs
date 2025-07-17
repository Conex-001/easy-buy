// server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/easybuy", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create a User model
const User = mongoose.model("User", new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  phone: String,
  password: String,
}));

// Register route
app.post("/api/register", async (req, res) => {
  const { firstName, lastName, email, phone, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "Email already registered" });

    const user = new User({ firstName, lastName, email, phone, password });
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Start the server
app.listen(5000, () => console.log("✅ Server running at http://localhost:5000"));
