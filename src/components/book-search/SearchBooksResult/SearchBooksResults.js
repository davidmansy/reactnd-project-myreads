import React from 'react';
import BooksGrid from '../../books/BooksGrid/BooksGrid';
import TechnicalError from '../../common/TechnicalError';
import Loading from '../../common/Loading/index';
import PropTypes from 'prop-types';

function SearchBooksResults(props) {
  const { error, isLoading, books, handleShelfChange } = props;

  return (
    <div className="search-books-results" data-testid="books-results">
      {error && <TechnicalError errorMessage={error} />}
      {isLoading && <Loading />}
      {!!books.length && (
        <BooksGrid books={books} handleShelfChange={handleShelfChange} />
      )}
    </div>
  );
}

SearchBooksResults.propTypes = {
  error: PropTypes.string,
  isLoading: PropTypes.bool.isRequired,
  books: PropTypes.arrayOf(PropTypes.object),
  handleShelfChange: PropTypes.func.isRequired
};

export default SearchBooksResults;
