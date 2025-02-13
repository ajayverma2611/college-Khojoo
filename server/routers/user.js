const router = require('express').Router();
const feedback = require('../controller/feedback');
const profile = require("../controller/profile");
const updatedprofile = require("../controller/updatedprofile");
const User = require("../models/userschema");
const bcrypt = require("bcrypt");
const session = require("express-session");
require("dotenv").config();
const isAuthenticated = require("../middleware/auth");
// Existing Routes (Kept Unchanged)
router.post("/profile", isAuthenticated, profile);
router.post("/updateprofile", isAuthenticated, updatedprofile);
router.post("/feedbacks", isAuthenticated, feedback);
//  Signup Route
router.post("/signup", async (req, res) => {
  try {
    const { name, location, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: "User already exists" });

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save user
    const newUser = new User({ name, location, email, password: hashedPassword });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error registering user", error });
  }
});

//  Login Route
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    // Store user session
    req.session.user = { id: user._id, email: user.email, name: user.name };
    res.status(200).json({ message: "Login successful", user: req.session.user });
  } catch (error) {
    res.status(500).json({ message: "Error logging in", error });
  }
});

// Logout Route
router.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.status(500).json({ message: "Error logging out" });
    res.clearCookie("connect.sid"); // Clear session cookie
    res.status(200).json({ message: "Logout successful" });
  });
});

//  Get Authenticated User (Session Check)
router.get("/me", (req, res) => {
  if (!req.session.user) return res.status(401).json({ message: "Not authenticated" });
  res.status(200).json({ user: req.session.user });
});

module.exports = router;
