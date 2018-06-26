import React from 'react';
import BooksGrid from './BooksGrid';

function SearchBooksResults(props) {
  const { error, isLoading, books, handleShelfChange } = props;

  return (
    <div className="search-books-results">
      {error && <div>Uh oh! Something went wrong: {error}.</div>}
      {isLoading && <div>Loading...</div>}
      {!!books.length && (
        <BooksGrid books={books} handleShelfChange={handleShelfChange} />
      )}
    </div>
  );
}

export default SearchBooksResults;
