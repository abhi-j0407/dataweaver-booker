import { PropTypes } from "prop-types";
import Book from "./Book";
import Head from "./Head";

const Books = ({ books }) => {
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
