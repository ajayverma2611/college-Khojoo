const mongoose = require('mongoose');

const FeedBackSchema = new mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true
  },
  message:{
    type: String,
    required: true
  }
});

const FeedBack = mongoose.model('FeedBack', FeedBackSchema);
module.exports = FeedBack;