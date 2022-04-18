import React from "react";
import classes from "./Book.module.css";
import { useState } from "react";

const Book = (props) => {
  const [showBookDetails, setShowBookDetails] = useState(false);

  function showBookDetailsHandler() {
    setShowBookDetails(!showBookDetails);
  }

  return (
    <li className={classes.book}>
      <h2>{props.title}</h2>
      <h3>By {props.author}</h3>
      {showBookDetails && (
        <React.Fragment>
          <p>{props.summary}</p> <br/>
          <h3>My favorite phrases from the book are:</h3> <br />
          <p>{props.phrases}</p>
        </React.Fragment>
      )}
      <button onClick={showBookDetailsHandler}>{showBookDetails ? 'Less Details' : 'More Details'}</button>
    </li>
  );
};

export default Book;
