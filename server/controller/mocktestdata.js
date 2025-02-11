import { mocktestSchema, mocktestSchema } from "../models/MockTestSchema";

async function mockTestData(req,res){
    const {id} = req.body;
    console.log(id);

    const test = await mocktestSchema.findById(id);

    if(!test){
        return res.status(404).json({error:true,message: "Test not found"});
    }

    res.status(200).json({error:false,data:test});
};

module.exports = updatedprofile;

