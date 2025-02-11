const mongoose = require("mongoose");


const privateUniversitySchema = new mongoose.Schema({
    "university" :{
        type : String,
        required : true
    },
    "location" :{
        type : String,
        required : true
    },
    "tier":{
        type : Number,
        required : true
    },
    "course":{
        type : String,
        required : true
    },
    "nirf_ranking":{
        type : Number,
        required : true
    },
    "entrance_exam":{
        type : String,
        required : true
    }
})

module.exports = mongoose.model('PrivateUniversity',privateUniversitySchema);