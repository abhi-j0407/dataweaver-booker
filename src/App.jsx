import axios from "axios";
import "./App.css";
import Books from "./components/Books/Books";
import SearchBar from "./components/SearchBar";
import { useCallback, useEffect, useState } from "react";
import Pagination from "./components/Pagination";
import Head from "./components/Books/Head";
import New from "./components/New";
import Update from "./components/Update";

function App() {
  const [books, setBooks] = useState([]);
  const [pagination, setPagination] = useState({});
  const [screens, setScreens] = useState({
    title: "",
    author: "",
    year: "",
    pages: "",
    language: "",
    country: "",
  });
  const [showAdd, setShowAdd] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [update, setUpdate] = useState({});

  const fetchBooks = useCallback(async () => {
    try {
      const { data } = await axios.get(
        "http://68.178.162.203:8080/application-test-v1.1/books"
      );
      setBooks(data.data);
      setPagination(data.pagination);
    } catch (err) {
      console.log("Error: ", err);
    }
  }, []);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  const handleUpdate = (id) => {
    setUpdate(books.find(book => book.id === id))
    setShowEdit(true)
  }

  return (
    <main>
      <div className="container">
        <h1>BOOKER</h1>
        <div>
          <SearchBar getBooks={fetchBooks} />
          <button onClick={() => setShowAdd(true)}>Add</button>
        </div>
        <Head screens={screens} setScreens={setScreens} />
        <Books books={books} setShow={handleUpdate} />
        <Pagination pagination={pagination} />
        {showAdd && <New setShow={setShowAdd} />}
        {showEdit && <Update setShow={setShowEdit} update={update} />}
      </div>
    </main>
  );
}

export default App;
