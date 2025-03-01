const mongoose = require('mongoose');

// MongoDB connection URI
const uri = "mongodb+srv://samplesudharsan4:aLIqH9LLjXOwC25F@cluster0.ptyub.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function connectToDatabase() {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to MongoDB successfully using Mongoose!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); // Exit process if database connection fails
  }
}

module.exports = { connectToDatabase, mongoose };
