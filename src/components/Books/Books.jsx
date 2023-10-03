import { PropTypes } from "prop-types";
import Book from "./Book";
import Head from "./Head";
import { useEffect, useState } from "react";

const Books = ({ books }) => {

  const [filters, setFilters] = useState({
    title: '',
    author: '',
    year: 0,
    pages: 0,
    language: '',
    country: ''
  });

  useEffect(() => {
    console.table(filters);
  }, [filters])

  return (
    <section className="books-container">
      <Head />
      <div className="books">
        {books.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </div>
    </section>
  );
};

Books.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
};

export default Books;
