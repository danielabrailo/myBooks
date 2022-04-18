import React, { useState, useEffect, useCallback } from "react";

import BooksList from "./components/BooksList";
import AddBook from "./components/AddBook";
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showAddBookForm, setShowAddBookForm] = useState(false);

  const fetchBooksHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "https://react-http-29ca8-default-rtdb.firebaseio.com/books.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const loadedBooks = [];

      for (const key in data) {
        loadedBooks.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          author: data[key].author,
        });
      }

      setBooks(loadedBooks);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchBooksHandler();
  }, [fetchBooksHandler]);

  async function addBookHandler(book) {
    const response = await fetch('https://react-http-29ca8-default-rtdb.firebaseio.com/books.json', {
      method: 'POST',
      body: JSON.stringify(book),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    showAddBookFormHandler();
  }

  let content = <p>No books were found. Add a new!</p>;

  if (books.length > 0) {
    content = <BooksList books={books} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  function showAddBookFormHandler() {
    setShowAddBookForm(!showAddBookForm);
  }

  return (
    <React.Fragment>
      <section>
        {!showAddBookForm && <button onClick={showAddBookFormHandler}>Add a new book</button>}
        {showAddBookForm && <AddBook onAddBook={addBookHandler} />}
      </section>
      <section>
        <button onClick={fetchBooksHandler}>Fetch Books</button>
      </section>
      <section>{content}</section>
    </React.Fragment>
  );
}

export default App;
