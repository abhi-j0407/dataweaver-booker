import { PropTypes } from "prop-types";
import { useEffect, useState } from "react";

const Book = ({ book, setShow }) => {
  const [viewWidth, setViewWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setViewWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="book">
      {viewWidth < 1023 ? (
        Object.keys(book).map((key) => (
          <p key={key}>
            {key.toUpperCase() + " : "}
            {book[key] || "N/A"}
          </p>
        ))
      ) : (
        <>
          <p>
            <a href={book.link}>{book.title || "N/A"}</a>
          </p>
          <p>{book.author || "N/A"}</p>
          <p>{book.year || "N/A"}</p>
          <p>{book.pages || "N/A"}</p>
          <p>{book.language || "N/A"}</p>
          <p>{book.country || "N/A"}</p>
        </>
      )}

      <button onClick={() => setShow(book.id)}>Edit</button>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object,
  setShow: PropTypes.func,
};

export default Book;
