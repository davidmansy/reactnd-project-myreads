import React from 'react';
import ListBooksHeader from './ListBooksHeader';
import Bookshelves from './Bookshelves';
import OpenSearch from '../book-search/OpenSearch';
import PropTypes from 'prop-types';

const BOOK_HEADER_TITLE = 'MyReads';

function ListBooks(props) {
  const { books, handleShelfChange, isLoading, searchPath } = props;

  return (
    <div className="list-books">
      <ListBooksHeader title={BOOK_HEADER_TITLE} />
      <Bookshelves
        books={books}
        handleShelfChange={handleShelfChange}
        isLoading={isLoading}
      />
      <OpenSearch searchPath={searchPath} />
    </div>
  );
}

ListBooks.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleShelfChange: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  searchPath: PropTypes.string.isRequired
};

export default ListBooks;
