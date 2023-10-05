import { PropTypes } from "prop-types";
import Book from "./Book";

const Books = ({ books, setShow }) => {

  return (
    <section className="books-container">
      
      <div className="books">
        {books.map((book) => (
          <Book key={book.id} book={book} setShow={setShow} />
        ))}
        {
          books.length === 0 && <p>No books available</p>
        }
      </div>
    </section>
  );
};

Books.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  setShow: PropTypes.func
};

export default Books;
