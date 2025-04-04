const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    image: { type: String, required: true }, 
    driveLink: { type: String, required: true }, 
    category: { type: String, required: true } 
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;

