const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    image: { type: String, required: true }, 
    driveLink: { type: String, required: true }, 
    category: { type: String, required: true } 
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;


// "title": "Class 12th Physics Part 2",
// "image": "https://res.cloudinary.com/duyuxtpau/image/upload/v1739257482/orecdqycaaue8rtbulav.webp",
// "driveLink": "https://drive.google.com/file/d/1zmbg3JQk_PpkYi2pKPbx0QUGPGlKqdP0/view?usp=sharing",
// "category": "NCERT Text Books"