import "./App.css";
import { useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";
import { Books, Head, SearchBar, Pagination, New, Update } from './components'

function App() {
  const [books, setBooks] = useState([]);
  const [pagination, setPagination] = useState({});
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [update, setUpdate] = useState({});
  const initialBooks = useRef(null);

  // Fetching books from API
  const fetchBooks = useCallback(async () => {
    try {
      const { data } = await axios.get(
        "http://68.178.162.203:8080/application-test-v1.1/books"
      );
      setBooks(data.data);
      setPagination(data.pagination);
      initialBooks.current = data.data;
    } catch (err) {
      console.log("Error: ", err);
    }
  }, []);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  const handleUpdate = (id) => {
    setUpdate(books.find((book) => book.id === id));
    setShowEdit(true);
  };

  // Sorting results by selected field and order
  const sortTable = (sortBy, order) => {
    const sorted = order
      ? []
          .concat(books)
          .sort((a, b) =>
            a[sortBy].toLowerCase() > b[sortBy].toLowerCase() ? 1 : -1
          )
      : []
          .concat(books)
          .sort((a, b) =>
            a[sortBy].toLowerCase() < b[sortBy].toLowerCase() ? 1 : -1
          );

    setBooks(sorted);
  };

  // Filtering results based on field
  const filterTable = (field, value) => {
    if (value === "") setBooks(initialBooks.current);
    else {
      const copy = initialBooks.current;
      const filtered = copy.filter((book) =>
        book[field].toLowerCase().includes(value.toLowerCase())
      );

      setBooks(filtered);
    }
  };

  return (
    <main>
      <div className="container">
        <h1>BOOKER</h1>
        <div className="searchline">
          <SearchBar filterTable={filterTable} />
          <button onClick={() => setShowAdd(true)}>Add</button>
        </div>
        <div className="table">
          <Head sortTable={sortTable} filterTable={filterTable} />
          <Books books={books} setShow={handleUpdate} />
        </div>
        <Pagination
          pagination={pagination}
          setPagination={setPagination}
          books={books}
        />
        {showAdd && <New setShow={setShowAdd} />}
        {showEdit && <Update setShow={setShowEdit} update={update} />}
      </div>
    </main>
  );
}

export default App;
