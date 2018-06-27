import React from 'react';
import { Link } from 'react-router-dom';

function SearchBooksBar(props) {
  const { query, onHandleChange, onHandleClose } = props;

  return (
    <div className="search-books-bar">
      <Link className="close-search" to="/" onClick={onHandleClose}>
        Close
      </Link>
      <div className="search-books-input-wrapper">
        <input
          type="text"
          placeholder="Search by title or author"
          value={query}
          onChange={onHandleChange}
        />
      </div>
    </div>
  );
}

export default SearchBooksBar;
