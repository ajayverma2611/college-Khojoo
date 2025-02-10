const mongoose = require('mongoose');

const questionScehma = new mongoose.Schema({
  testId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'MockTest',
    required: true
  },
  question:{
    type: String,
    required: true
  },
  questionImage:{
    type: String,  // giving url for this question image...
    required: false 
  },
  options: {
    a: {
      text: {type: String, required: true},
      image: {type: String, required: false}
    },
    b: {
      text: {type: String, required: true},
      image: {type: String, required: false}
    },
    c: {
      text: {type: String, required: true},
      image: {type: String, required: false}
    },
    d: {
      text: {type: String, required: true},
      image: {type: String, required: false}
    }
  },
  correctOption:{
    type: String,
    values: ['a', 'b', 'c', 'd'],
    required: true
  },
  selectedOption: {
    type: String,
    values: ['a', 'b', 'c', 'd', ''],
    required: false
  },
  viewExplanation:{
    text: {type: String, required: true},
    image:{type: String, required: false}
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const sectionSchema = new mongoose.Schema({
  name: {type : String, values: ['Physics', 'Chemistry', 'Maths'], required: true},
  questions: [questionScehma]
});

const mocktestSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  totalMarks:{
    type: Number, 
    required: true
  },
  scoredMarks:{
    type: Number,
    required: true
  },
  sections: [sectionSchema],
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('sections', sectionSchema);
module.exports = mongoose.model('MockTest', mocktestSchema);