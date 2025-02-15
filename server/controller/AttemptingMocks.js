const User = require("../models/userschema");

async function addMockToUser(req, res) {
  const { userId, data, change } = req.body;

  console.log(data);
  console.log("crossed 1");

  try {
    // Find the user by userId
    const user = await User.findById(userId);
    console.log("crossed 2");

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Ensure attempting_mocks is an array, otherwise initialize it as empty
    if (!user.attempting_mocks) {
      user.attempting_mocks = [];
    }

    console.log("Current attempting_mocks:", user.attempting_mocks);

    // Ensure data is not null or undefined before proceeding
    if (!data || !data._id) {
      return res.status(400).json({ error: "Invalid data received" });
    }

    let index = -1;

    // Check if the mock already exists in attempting_mocks array
    for (let i = 0; i < user.attempting_mocks.length; i++) {
      if (user.attempting_mocks[i] && user.attempting_mocks[i]._id) {
        if (user.attempting_mocks[i]._id.equals(data._id)) {
          index = i;
          break;
        }
      }
    }

    let existing = false;
    let mockModified = false;  // To track if mock was modified

    if (index !== -1) {
      existing = true;
      if (change === "modify") {
        // If the mock already exists, update it
        user.attempting_mocks[index] = { ...data };
        mockModified = true; // Mark as modified
      }
    } else {
      // If the mock doesn't exist, add it
      user.attempting_mocks.push(data);
    }

    // Save the user document with the updated attempting_mocks
    await user.save();

    if (existing && !mockModified) {
      res.status(200).json({
        message: "Mock updated successfully",
        data: user.attempting_mocks[index], // Return the updated mock
        existing
      });
    } else {
      res.status(200).json({
        message: "Mock added successfully",
        existing
      });
    }

  } catch (err) {
    // Catch any errors and send an error response
    console.error(err);
    return res.status(500).json({ error: err.message });
  }
}

module.exports = addMockToUser;
