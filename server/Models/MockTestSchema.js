const mongoose = require('mongoose');

// Question Schema
const questionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: false
  },
  question_image: {
    type: String,  // giving url for this question image...
    required: false
  },
  options: {
    a: { type: String, required: false },
    a_image_link: { type: String, required: false },
    b: { type: String, required: false },
    b_image_link: { type: String, required: false },
    c: { type: String, required: false },
    c_image_link: { type: String, required: false },
    d: { type: String, required: false },
    d_image_link: { type: String, required: false }
  },
  correctOption: {
    type: String,  // Correct option should be one of these values
    required: false
  },
  selectedOption: {
    type: String,  // Allow an empty string for unselected options
    required: false
  },
  explanation: { type: String, required: false },
  explanation_image: { type: String, required: false },
});

// Section Schema
const sectionSchema = new mongoose.Schema({
  name: {
    type: String, // Limit the values to these 3
    required: false
  },
  questions: [questionSchema] // Array of question objects
});

// MockTest Schema
const mocktestSchema = new mongoose.Schema({
  title: {
    type: String,
    required: false
  },
  totalMarks: {
    type: Number,
    required: false
  },
  scoredMarks: {
    type: Number,
    required: false
  },
  sections: [sectionSchema], // Array of section objects
  timer: {
    type: Number,
    required: false
  }
});

// Model export
module.exports = mongoose.model('MockTest', mocktestSchema);  // Export the model

