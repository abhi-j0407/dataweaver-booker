import { PropTypes } from "prop-types";

const Book = ({ book, setShow }) => {
  return (
      <div className="book">
          <p><a href={book.link}>{book.title || "N/A"}</a></p>
          <p>{book.author || "N/A"}</p>
          <p>{book.year || "N/A"}</p>
          <p>{book.pages || "N/A"}</p>
          <p>{book.language || "N/A"}</p>
      <p>{book.country || "N/A"}</p>
      <button onClick={() => setShow(book.id)}>Edit</button>
    </div>
  )
}

Book.propTypes = {
  book: PropTypes.object,
  setShow: PropTypes.func
}

export default Book;