import React, { useRef } from "react";
import "../Styles/Materials.css";
import mathsbookclass11 from "../Assests/materials-books/ncert-books/Mathematics-class11.jpg"
import physics_part1_class11 from "../Assests/materials-books/ncert-books/physics_part1_class11.jpg"
import physics_part2_class11 from "../Assests/materials-books/ncert-books/physics_part2_class11.jpg"
import chemistry_part1_class11 from "../Assests/materials-books/ncert-books/chemistry_part1_class11.jpg"
import chemistry_part2_class11 from "../Assests/materials-books/ncert-books/chemistry_part2_class11.jpg"
import maths_vol1_class12 from "../Assests/materials-books/ncert-books/maths_vol1_class12.jpg"
import maths_vol2_class12 from "../Assests/materials-books/ncert-books/maths_vol2_class12.jpg"
import physics_part1_class12 from "../Assests/materials-books/ncert-books/physics_part1_class12.jpg"
import physics_part2_class12 from "../Assests/materials-books/ncert-books/physics_part2_class12.jpg"
import chemistry_part1_class12 from "../Assests/materials-books/ncert-books/chemistry_part1_class12.jpg"
import chemistry_part2_class12 from "../Assests/materials-books/ncert-books/chemistry_part2_class12.jpg"

const booksData = [
  {
    category: "NCERT Text Books",
    books: [
      { id: 1, title: "Class 11th Mathematics", image: mathsbookclass11 },
      { id: 2, title: "Class 11th Physics Part 1", image: physics_part1_class11 },
      { id: 3, title: "Class 11th Physics Part 2", image: physics_part2_class11 },
      { id: 4, title: "Class 11th Chemistry Part 1", image: chemistry_part1_class11},
      { id: 5, title: "Class 11th Chemistry Part 2", image: chemistry_part2_class11 },
      { id: 6, title: "Class 12th Mathematics Vol 1", image: maths_vol1_class12 },
      { id: 7, title: "Class 12th Mathematics Vol 2", image: maths_vol2_class12 },
      { id: 8, title: "Class 12th Physics Part 1", image: physics_part1_class12 },
      { id: 9, title: "Class 12th Physics Part 2", image: physics_part2_class12 },
      { id: 10, title: "Class 12th Chemistry Part 1", image: chemistry_part1_class12 },
      { id: 11, title: "Class 12th Chemistry Part 2", image: chemistry_part2_class12 }
    ]
  },
  {
    category: "Hand Books",
    books: [
      { id: 1, title: "NCERT Solutions", image: "ncert_solution.jpg" },
      { id: 2, title: "Class 12th Maths vol 1", image: "maths_vol1.jpg" },
      { id: 3, title: "Class 12th Maths vol 1", image: "maths_vol1.jpg" },
      { id: 4, title: "Class 12th Maths vol 1", image: "maths_vol1.jpg" },
      { id: 5, title: "Class 12th Maths vol 1", image: "maths_vol1.jpg" },
      { id: 6, title: "Class 12th Maths vol 1", image: "maths_vol1.jpg" },
    ],
  },
  {
    category: "Question Bank",
    books: [
      { id: 1, title: "NCERT Solutions", image: "ncert_solution.jpg" },
      { id: 2, title: "Class 12th Maths vol 1", image: "maths_vol1.jpg" },
      { id: 3, title: "Class 12th Maths vol 1", image: "maths_vol1.jpg" },
      { id: 4, title: "Class 12th Maths vol 1", image: "maths_vol1.jpg" },
      { id: 5, title: "Class 12th Maths vol 1", image: "maths_vol1.jpg" },
      { id: 6, title: "Class 12th Maths vol 1", image: "maths_vol1.jpg" },
    ],
  },
];

const Materials = () => {
  return (
    <div className="gallery">
      {booksData.map((section, index) => (
        <BookSection key={index} category={section.category} books={section.books} />
      ))}
    </div>
  );
};

const BookSection = ({ category, books }) => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 300;
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 300;
    }
  };

  return (
    <div className="book-section">
      <h2>{category}</h2>
      <div className="scroll-container">
        <button className="arrow left" onClick={scrollLeft}>&#10094;</button>
        <div className="book-list" ref={scrollRef}>
          {books.map((book) => (
            <div className="book-card" key={book.id}>
              <img src={book.image} alt={book.title} />
              <p>{book.title}</p>
              <button className="download-btn">Download</button>
            </div>
          ))}
        </div>
        <button className="arrow right" onClick={scrollRight}>&#10095;</button>
      </div>
    </div>
  );
};

export default Materials;
