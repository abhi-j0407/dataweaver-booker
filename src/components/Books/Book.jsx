import { PropTypes } from "prop-types";

const Book = ({ book }) => {
  return (
      <div className="book">
          <p><a href={book.link}>{book.title || "N/A"}</a></p>
          <p>{book.author || "N/A"}</p>
          <p>{book.year || "N/A"}</p>
          <p>{book.pages || "N/A"}</p>
          <p>{book.language || "N/A"}</p>
          <p>{book.country || "N/A"}</p>
    </div>
  )
}

Book.propTypes = {
    book: PropTypes.object
}

export default Book;