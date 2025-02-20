const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const cors = require("cors");
const { connectToDatabase, mongoose } = require("./config/connect");
const userRoutes = require("./routers/user");
const bookRoutes = require("./routers/bookRoutes");
const mocktestRoutes = require("./routers/mocktest");
require("dotenv").config();

const app = express();

app.use(express.json());

// ✅ Fix CORS to allow credentials
app.use(
  cors({
    credentials: true, // ✅ Allow cookies to be sent
    origin: ["http://localhost:3000", "http://localhost:5000", "https://khojo-college.vercel.app"], // ✅ Your frontend URL
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// Start database connection first
connectToDatabase()
  .then(() => {
    console.log("MongoDB Connected. Now starting server...");

    // ✅ Use existing Mongoose connection for session store
    app.use(
      session({
        secret: process.env.SESSION_SECRET || "your_strong_secret_key",
        resave: false,
        saveUninitialized: false,
        store: MongoStore.create({
          client: mongoose.connection.getClient(), // ✅ REUSE EXISTING CONNECTION
          ttl: 24 * 60 * 60, // 1 day
        }),
        cookie: {
          httpOnly: true, // ✅ Prevent JavaScript access
          secure:true, // ✅ Only use secure cookies in production
          sameSite: "None", // ✅ Allow cross-site cookies
          maxAge: 24 * 60 * 60 * 1000, // 1 day
        },
      })
    );

    // Routes
    app.use("/auth", userRoutes);
    app.use("/mock", mocktestRoutes);
    app.use("/material", bookRoutes);

    // Start the server **only after DB is connected**
    app.listen(8000, () => {
      console.log("Server is running on http://localhost:8000");
    });
  })
  .catch((error) => {
    console.error("Failed to connect to database:", error);
    process.exit(1);
  });
