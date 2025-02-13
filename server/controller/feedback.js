const FeedBack = require('../Models/FeedBack');

async function feedback(req, res){
  try{
    const {name, email, message} = req.body;
    
    const feedBack = new FeedBack({name, email, message});
    await feedBack.save();
    res.status(200).json({message: "Feedback Saved successfully"});
  }catch(err){
    res.status(500).json({message: "Internal Server Error"});
  }
}

module.exports = feedback;