import axios from "axios";
import { useState } from "react";
import { PropTypes } from "prop-types";

// Modal for adding a new book to DB
const New = ({ setShow }) => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    year: "",
    pages: "",
    language: "",
    country: "",
  });
  const [adding, setAdding] = useState(false);

  const handleChange = (e) => {
    setBook((book) => ({
      ...book,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setAdding(true);
      const res = await axios.post(
        "http://68.178.162.203:8080/application-test-v1.1/books",
        book
      );
      console.log("RESP: ", res);
      alert("Added successfully");
      setShow(false);
    } catch (err) {
      console.error(err);
    } finally {
      setAdding(false);
    }
  };

  return (
    <section className="newModal">
      <div>
        <div>
          <h3>Add New Book</h3>
          <button onClick={() => setShow(false)}>Close</button>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Title:</label>
            <input
              type="text"
              value={book.title}
              name="title"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Author:</label>
            <input
              type="text"
              value={book.author}
              name="author"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Year:</label>
            <input
              type="number"
              value={book.year}
              name="year"
              onChange={handleChange}
              required
              min={1}
            />
          </div>
          <div>
            <label>Pages:</label>
            <input
              type="number"
              value={book.pages}
              name="pages"
              onChange={handleChange}
              required
              min={1}
            />
          </div>
          <div>
            <label>Laguage:</label>
            <input
              type="text"
              value={book.language}
              name="language"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Country:</label>
            <input
              type="text"
              value={book.country}
              name="country"
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" disabled={adding}>
            Add
          </button>
        </form>
      </div>
    </section>
  );
};

New.propTypes = {
  setShow: PropTypes.func,
};

export default New;
