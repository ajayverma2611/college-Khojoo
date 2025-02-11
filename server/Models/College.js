const mongoose = require("mongoose");

const collegeSchema  = new mongoose.Schema({
    "Institue":{
        type : String,
        required : true
    },
    "Academic Program Name":{
        type : String,
        required : true
    },
    "Quota":{
        type : String,
        required : true
    },
    "Seat Type":{
        type : String,
        required : true
    },
    "Gender":{
        type : String,
        required : true
    },
    "Opening Rank":{
        type : String,
        required : true
    },
    "Closing Rank":{
        type : String,
        required : true
    },
    "State":{
        type : String,
        required : true
    },
    "Exam Type":{
        type : String,
        required : true
    },
    "Percentile":{
        type : String,
        required : true
    },
    "Marks":{
        type :Number,
        required : true
    }
})

module.exports = mongoose.model('College',collegeSchema);