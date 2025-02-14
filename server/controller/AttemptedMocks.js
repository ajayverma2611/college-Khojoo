const User = require("../Models/userschema");

async function addAttemptedMockToUser(req, res) {
  const { userId, data } = req.body;
  let score = 0;
  try {
    const user = await User.findById(userId);
    const index = user.attempting_mocks.findIndex(mock => mock._id.equals(data._id));
    if(index === -1){
      res.status(404).json({ error: "Mock not found" });
    }
    user.attempting_mocks.filter(mock => !mock._id.equals(data._id));
    data.sections.map((section, index) => {
      section.questions.map((question, index) => {
        if(question.selectedOption === question.correctOption){
          score += 4;
        }else if(question.selectedOption !== ""){
          score -= 1;
        }
      });
    });
    data.scoredMarks = score;
    user.attempted_mocks.push(data);
    res.status(200).send("Mock submitted Successfully");
  }catch(err){
    res.status(500).json({ error: err.message });
  }
}

export default addAttemptedMockToUser;