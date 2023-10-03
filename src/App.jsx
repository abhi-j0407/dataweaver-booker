import axios from 'axios';
import './App.css'
import Books from './components/Books'
import SearchBar from './components/SearchBar'
import { useEffect } from 'react';
import { useState } from 'react';

function App() {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, [])
  

  const fetchBooks = async () => {
    try {
      const { data } = await axios.get("http://68.178.162.203:8080/application-test-v1.1/books");
      console.log('Data: ', data);
      setBooks(data.data);
    } catch (err) {
      console.log('Error: ', err);
    }
  }

  return (
    <main>
      <div className="container">
        <h1>BOOKER</h1>
        <SearchBar getBooks = {fetchBooks} />
        <Books books={books} />
      </div>
    </main>
  )
}

export default App
