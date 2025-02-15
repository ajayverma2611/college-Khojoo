const User = require("../models/userschema");

async function addAttemptedMockToUser(req, res) {
  const { userId, data } = req.body;
  let score = 0;
  console.log("hi connected ");
  console.log(data);
  try {
    const user = await User.findById(userId);
    let index = -1; // Make sure 'index' is declared with 'let' to be reassigned
    console.log("crossed 1");
    // Check if the mock already exists in attempting_mocks array
    for (let i = 0; i < user.attempting_mocks.length; i++) {
      if (user.attempting_mocks[i] && user.attempting_mocks[i]._id) {
        console.log(i + " " + user.attempting_mocks[i]._id);
        if (user.attempting_mocks[i]._id.equals(data._id)) {
          index = i;
          break;
        }
      }
    }
    console.log("crossed 2");
    if(index === -1){
      res.status(404).json({ error: "Mock not found" });
    }
    console.log("crossed 3");
    user.attempting_mocks = user.attempting_mocks.filter(mock => !mock._id.equals(data._id));
    console.log("crossed 4");
    data.sections.map((section, index) => {
      section.questions.map((question, index) => {
        if(question.selectedOption === question.correctOption){
          score += 4;
        }else if(question.selectedOption !== ""){
          score -= 1;
        }
      });
    });
    console.log("crossed 5");

    data.scoredMarks = score;
    user.attempted_mocks.push(data);
    user.save();
    res.status(200).send("Mock submitted Successfully");
  }catch(err){
    res.status(500).json({ error: err.message });
  }
}

module.exports = addAttemptedMockToUser;