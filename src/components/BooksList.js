import React from 'react';
import Book from './Book';
import classes from './BooksList.module.css';


const BookList = (props) => {
  return (
    <ul className={classes['books-list']}>
      {props.books.map((book) => (
        <Book
          key={book.id}
          title={book.title}
          author={book.author}
          summary={book.summary}
          phrases={book.phrases}
        />
      ))}
    </ul>
  );
};

export default BookList;
