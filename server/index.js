
const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const cors = require("cors");
const connectToDatabase = require("./config/connect");
const userRoutes = require("./routers/user");
const mocktestRoutes = require("./routers/mocktest");

const app = express();

// Middleware
app.use(express.json());
app.use(cors({ 
  credentials: true, 
  origin: "http://localhost:3000"  // Adjust to frontend URL
}));

// Setup session middleware
app.use(
  session({
    secret: "your_strong_secret_key", // Use a strong secret key
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: "mongodb+srv://samplesudharsan4:aLIqH9LLjXOwC25F@cluster0.ptyub.mongodb.net/college-khojo", // Explicit DB name added
      collectionName: "sessions",
    }),
    cookie: {
      httpOnly: true,
      secure: false, // Change to true when using HTTPS
      sameSite: "lax", 
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    },
  })
);

// Routes
app.use("/auth", userRoutes);
app.use("/mocktest", mocktestRoutes);

// Start Server after Database Connection
(async () => {
  try {
    await connectToDatabase();
    app.listen(8000, () => {
      console.log("Server is running on http://localhost:8000");
    });
  } catch (error) {
    console.error("Failed to start server:", error);
  }
})();



