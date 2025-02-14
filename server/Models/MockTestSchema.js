const mongoose = require('mongoose');

// Define the schema for individual questions
const questionSchema = new mongoose.Schema({
  question: { type: String, required: true },
  question_image: { type: String, default: '' },
  options: { type: [String], required: true },  // Assuming options are an array of strings
  correctOption: { type: String, required: true },  // Assuming a single correct option is a string
  selectedOption: { type: String, default: '' },  // Default empty selected option
  explanation: { type: String, default: '' },
  explanation_image: { type: String, default: '' }
});

// Define the schema for each section (e.g., Physics, Chemistry, Maths)
const sectionSchema = new mongoose.Schema({
  name: { type: String, required: true },  // Name of the section (e.g., 'Physics', 'Chemistry', 'Maths')
  questions: { type: [questionSchema], required: true }  // Array of questions
});

// Define the main schema for the mock test
const mockTestSchema = new mongoose.Schema({
  title: { type: String, required: true },
  totalMarks: { type: Number, required: true },
  scoredMarks: { type: Number, required: true },
  sections: { type: [sectionSchema], required: true },  // Array of sections
  timer: { type: Number, required: true }  // Timer in minutes
});

// Create the model for MockTestSchema
const MockTest = mongoose.model('MockTest', mockTestSchema);

module.exports = MockTest;