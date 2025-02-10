import React, { useRef } from "react";
import "../Styles/Materials.css";

const booksData = [
  {
    category: "Ncert Text Books",
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
