const mongoose = require('mongoose');

// MongoDB connection URI
const uri = process.env.MONGO_URL;

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
