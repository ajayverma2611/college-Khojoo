const User = require("../Models/userschema");

async function addMockToUser(req, res) {
  const { userId, data } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Check if the mock already exists
    const index = user.attempting_mocks.findIndex(mock => mock._id.equals(data._id));

    if (index !== -1) {
      // If found, update the existing mock
      user.attempting_mocks[index] = data;
    } else {
      // If not found, add a new mock
      user.attempting_mocks.push(data);
    }

    await user.save();
    res.status(200).json({ message: "Mock added successfully" });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = addMockToUser;