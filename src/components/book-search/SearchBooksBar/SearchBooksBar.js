import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function SearchBooksBar(props) {
  const { query, onHandleChange, rootPath } = props;

  return (
    <div className="search-books-bar">
      <Link className="close-search" to={rootPath}>
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

SearchBooksBar.propTypes = {
  query: PropTypes.string.isRequired,
  onHandleChange: PropTypes.func.isRequired,
  rootPath: PropTypes.string.isRequired
};

export default SearchBooksBar;
