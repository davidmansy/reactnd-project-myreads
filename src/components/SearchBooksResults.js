import React from 'react';
import BooksGrid from './BooksGrid';
import TechnicalError from './TechnicalError';
import Loading from './Loading/Loading';

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
