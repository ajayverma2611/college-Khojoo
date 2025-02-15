const User = require("../models/userschema");

async function addMockToUser(req, res) {
  try {
    const { userId, data, change } = req.body;

    console.log("Received data:", data);

    // Find user and ensure they exist
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    console.log("User found:", userId);

    // Ensure attempting_mocks is an array
    if (!Array.isArray(user.attempting_mocks)) {
      user.attempting_mocks = [];
    }

    // Check if the mock already exists
    const mockIndex = user.attempting_mocks.findIndex(
      (mock) => mock._id.toString() === data._id
    );

    if (mockIndex !== -1 && change === "modify") {
      user.attempting_mocks[mockIndex] = { ...data };
    } else if (mockIndex === -1) {
      user.attempting_mocks.push(data);
    }

    // Save using findOneAndUpdate to avoid version errors
    await User.findOneAndUpdate(
      { _id: userId },
      { $set: { attempting_mocks: user.attempting_mocks } },
      { new: true }
    );

    console.log("Mock processed successfully");
    res.status(200).json({ message: "Mock processed successfully" });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: err.message });
  }
}

module.exports = addMockToUser;
