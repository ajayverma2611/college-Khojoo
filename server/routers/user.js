const router = require('express').Router();
const feedback = require('../controller/feedback');
const profile = require("../controller/profile");
const updatedprofile = require("../controller/updatedprofile");
const User = require("../models/userschema");
const colleges = require("../controller/collegedetails");
const bcrypt = require("bcrypt");
const session = require("express-session");
require("dotenv").config();
const isAuthenticated = require("../middleware/auth");
const privateuniversities = require("../controller/PrivateUniversity");
// Existing Routes (Kept Unchanged)
const sendEmail = require('../controller/emailService');

//  Profile Routes
router.get("/profile", isAuthenticated, profile);
router.post("/updateprofile", updatedprofile);
router.post("/feedbacks", isAuthenticated, feedback);
router.post("/colleges",colleges);
const TempUser = require("../models/TempUser");

router.get("/privateuniversities", privateuniversities)
//  Signup Route
// Signup Route
router.post("/signup", async (req, res) => {
  try {
    console.log('Signup request received');
    const { name, location, email, password } = req.body;

    // Validate the email format using a regex pattern
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    // Generate a 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000);

    // Create and save the temporary user
    const tempuser = await TempUser.find({ email });
    if(tempuser){
      await TempUser.deleteOne({ email, otp });
    }

    const newTempUser = new TempUser({ 
      name, 
      location, 
      email, 
      password: hashedPassword, 
      otp 
    });


    await newTempUser.save();

    // Send OTP email
    sendEmail(email, otp);

    // Respond to the client
    res.status(201).json({ message: "User registered successfully. Please verify OTP." });
  } catch (error) {
    console.error('Error during user registration:', error);
    res.status(500).json({ message: "Error registering user", error: error.message });
  }
});


router.post("/verifyotp", async (req, res) => {
  try {
    const { email, otp } = req.body;

    // Find the temporary user with the provided email and OTP
    const tempUser = await TempUser.findOne({ email, otp });

    if (!tempUser) {
      return res.status(400).json({ message: "Invalid OTP" });
    }

    // Destructure user information from temp user
    const { name, location, password } = tempUser;

    // Remove the temporary user after OTP verification
    await TempUser.deleteOne({ email, otp });

    // Create and save the final user
    const newUser = new User({ 
      name, 
      location, 
      email, 
      password 
    });

    await newUser.save();

    // Respond to the client that OTP was verified successfully
    res.status(200).json({ message: "OTP verified successfully. Account created." });
  } catch (error) {
    console.error('Error during OTP verification:', error);
    res.status(500).json({ message: "Error verifying OTP", error: error.message });
  }
});

// ✅ Login Route
router.post("/login", async (req, res) => {
  try {
    console.log('hyyy done');
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
    console.log('hyy logout');
    res.status(200).json({ message: "Logout successful" });
  });
});

//  Get Authenticated User (Session Check)
router.get("/me", (req, res) => {
  if (!req.session.user) return res.status(201).json({ message: "Not authenticated" });
  res.status(200).json({ user: req.session.user });
});

module.exports = router;
