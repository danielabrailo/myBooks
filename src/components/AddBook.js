import React, { useRef } from 'react';

import classes from './AddBook.module.css';

function AddBook(props) {
  const titleRef = useRef('');
  const authorRef = useRef('');
  const summaryRef = useRef('');
  const phrasesRef = useRef('');

  function submitHandler(event) {
    event.preventDefault();

    // could add validation here...

    const book = {
      title: titleRef.current.value,
      author: authorRef.current.value,
      summary: summaryRef.current.value,
      phrases: phrasesRef.current.value,
    };

    props.onAddBook(book);
  }

  return (
    <form onSubmit={submitHandler}>
      <h2>Add your favourite books here! </h2>
      <div className={classes.control}>
        <label htmlFor='title'>Title</label>
        <input type='text' id='title' ref={titleRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor='date'>Author</label>
        <input type='text' id='date' ref={authorRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor='summary'>Summary</label>
        <textarea rows='5' id='summary' ref={summaryRef}></textarea>
      </div>
      <div className={classes.control}>
        <label htmlFor='phrases'>Add your favorite phrases from the book</label>
        <textarea rows='5' id='phrases' ref={phrasesRef}></textarea>
      </div>
      <button>Add Book</button>
    </form>
  );
}

export default AddBook;
