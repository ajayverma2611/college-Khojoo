import User from '../models/user.js';


async function userprofile(req,res){
    const {id} = req.body;
    console.log(id);

    const user = await User.findById(id);

    if(!user){
        return res.status(404).json({message: "User not found"});
    }
    
    res.status(200).json({user: user});
}

module.exports = userprofile;
