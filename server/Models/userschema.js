const mongoose = require('mongoose');
import { mocktestSchema } from './MockTestSchema';

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
    attempting_mocks : [mocktestSchema],
    attempted_mocks : [mocktestSchema],
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = userSchema;