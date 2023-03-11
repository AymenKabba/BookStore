import { useState } from "react";
import Navbar from "../../components/Navbar";
import { books } from "../../data/books";
import "./books.css";

const Books = () => {
  const [search, setSearch] = useState("");

  return (
    <section className="books">
      <div className="books-search-wrapper">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="search"
          placeholder="Search in books"
        />
      </div>
      <div className="books-wrapper">
        {books
          .filter((book) => book.name.toLowerCase().includes(search))
          .map((book) => (
            <div key={book.id} className="book">
              <img
                src={book.image}
                alt={book.name}
                className="book-img"
              />
              <h2 className="book-name">{book.name}</h2>
              <div className="book-details">
                <div>Author: {book.author}</div>
                <div>Publisher: {book.publisher}</div>
                <div>Publication Date: {book.publicationDate.toDateString()}</div>
                <div>ISBN: {book.isbn}</div>
              </div>
              <p className="book-description">{book.description}</p>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Books;
