import axios from "axios";
import "./App.css";
import Books from "./components/Books/Books";
import SearchBar from "./components/SearchBar";
import { useCallback, useEffect } from "react";
import { useState } from "react";
import Pagination from "./components/Pagination";

function App() {
  const [books, setBooks] = useState([]);
  const [pagination, setPagination] = useState({});

  const fetchBooks = useCallback(async () => {
    try {
      const { data } = await axios.get(
        "http://68.178.162.203:8080/application-test-v1.1/books"
      );
      console.log("Data: ", data);
      setBooks(data.data);
      setPagination(data.pagination);
    } catch (err) {
      console.log("Error: ", err);
    }
  }, []);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return (
    <main>
      <div className="container">
        <h1>BOOKER</h1>
        <SearchBar getBooks={fetchBooks} />
        <Books books={books} />
        <Pagination pagination={pagination} />
      </div>
    </main>
  );
}

export default App;
