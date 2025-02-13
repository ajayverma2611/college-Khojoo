const mongoose = require('mongoose');

// MongoDB connection URI
const uri = "mongodb+srv://samplesudharsan4:aLIqH9LLjXOwC25F@cluster0.ptyub.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function connectToDatabase() {
  try {
    // Connecting to MongoDB using Mongoose
    await mongoose.connect(uri);
    console.log("Connected to MongoDB successfully using Mongoose!");

    // You can now perform database operations, e.g., querying, inserting, etc.
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

module.exports = connectToDatabase;