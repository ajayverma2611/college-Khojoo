
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
app.use(express.json({ limit: '10mb' }));
app.use(cors({ 
  credentials: true, 
  origin: ["http://localhost:3000","http://localhost:5000"]  // Adjust to frontend URL
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
      secure: false, // Change to true when using HTTPS
      sameSite: "lax", 
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
async () => {const express = require("express");
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
  app.use(express.json({ limit: "10mb" }));
  app.use(
    cors({
      credentials: true,
      origin: ["https://khojo-college.vercel.app"], // Add Vercel frontend URL
      methods: ['GET', 'POST', 'PUT', 'DELETE']
    })
  );
  
  app.use(
    session({
      secret: process.env.SESSION_SECRET || "your_strong_secret_key",
      resave: false,
      saveUninitialized: false,
      store: MongoStore.create({
        mongoUrl: process.env.MONGO_URL,
        collectionName: "sessions",
      }),
      cookie: {
        httpOnly: true,
        secure: true, // Secure in production
        sameSite: "lax",
        maxAge: 24 * 60 * 60 * 1000, // 1 day
      },
    })
  );
  
  // Routes
  app.use("/auth", userRoutes);
  app.use("/mock", mocktestRoutes);
  app.use("/material", bookRoutes);
  
  // Export API for Vercel
  
  try {
    await connectToDatabase();

    app.listen(8000, () => {
      console.log("Server is running on https://khojo-college-server.vercel.app");
    });
  } catch (error) {
    console.error("Failed to start server:", error);
  }
});