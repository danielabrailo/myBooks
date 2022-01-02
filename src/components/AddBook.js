import React, { useRef } from 'react';

import classes from './AddBook.module.css';

function AddBook(props) {
  const titleRef = useRef('');
  const openingTextRef = useRef('');
  const authorRef = useRef('');

  function submitHandler(event) {
    event.preventDefault();

    // could add validation here...

    const book = {
      title: titleRef.current.value,
      openingText: openingTextRef.current.value,
      author: authorRef.current.value,
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
        <label htmlFor='opening-text'>Opening Text</label>
        <textarea rows='5' id='opening-text' ref={openingTextRef}></textarea>
      </div>
      <div className={classes.control}>
        <label htmlFor='date'>Author</label>
        <input type='text' id='date' ref={authorRef} />
      </div>
      <button>Add Book</button>
    </form>
  );
}

export default AddBook;
