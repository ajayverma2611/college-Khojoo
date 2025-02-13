const mongoose = require('mongoose');
const MockTest = require('./MockTestSchema'); // Assuming you're exporting the model from MockTest.js

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    attempting_mocks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MockTest'  // Reference to the MockTest model
    }],
    attempted_mocks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MockTest'  // Reference to the MockTest model
    }],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Create the User model from the schema and export it
module.exports = mongoose.model('User', userSchema);
