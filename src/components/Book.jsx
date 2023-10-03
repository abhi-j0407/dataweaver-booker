import { PropTypes } from "prop-types";

const Book = ({ book }) => {
  return (
    <div className="book">{book.title}</div>
  )
}

Book.propTypes = {
    book: PropTypes.object
}

export default Book