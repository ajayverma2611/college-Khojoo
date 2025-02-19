const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const cors = require("cors");
const connectToDatabase = require("./config/connect");
const userRoutes = require("./routers/user");
const bookRoutes = require("./routers/bookRoutes");
const mocktestRoutes = require("./routers/mocktest");
require("dotenv").config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors({ 
  credentials: true, 
  origin: ["http://localhost:3000","http://localhost:5000", "https://khojo-college.vercel.app"],  // Adjust to frontend URL
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
}));

// Setup session middleware
app.use(
  session({
    secret: "your_strong_secret_key", // Use a strong secret key
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URL, // Explicit DB name added
      collectionName: "sessions",
    }),
    cookie: {
      httpOnly: true,
      secure: true, // Change to true when using HTTPS
      sameSite: "None", 
      maxAge: 24 * 60 * 60 * 1000, // 1 day
    },
  })
);

// Routes
app.use("/auth", userRoutes);
app.use("/mock", mocktestRoutes);
app.use("/material", bookRoutes);


connectToDatabase().then(
// Start Server after Database Connection
async () => {
  try {
    // await connectToDatabase();

    app.listen(8000, () => {
      console.log("Server is running on http://localhost:8000");
    });
  } catch (error) {
    console.error("Failed to start server:", error);
  }
});
