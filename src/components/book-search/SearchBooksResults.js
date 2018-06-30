import React from 'react';
import BooksGrid from '../books/BooksGrid';
import TechnicalError from '../common/TechnicalError';
import Loading from '../common/Loading/index';

function SearchBooksResults(props) {
  const { error, isLoading, books, handleShelfChange } = props;

  return (
    <div className="search-books-results">
      {error && <TechnicalError error={error} />}
      {isLoading && <Loading />}
      {!!books.length && (
        <BooksGrid books={books} handleShelfChange={handleShelfChange} />
      )}
    </div>
  );
}

export default SearchBooksResults;
