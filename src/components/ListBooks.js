import React from 'react';
import ListBooksHeader from './ListBooksHeader';
import Bookshelves from './Bookshelves';
import OpenSearch from './OpenSearch';

function ListBooks(props) {
  const { books, handleShelfChange, isLoading } = props;

  return (
    <div className="list-books">
      <ListBooksHeader />
      <Bookshelves
        books={books}
        handleShelfChange={handleShelfChange}
        isLoading={isLoading}
      />
      <OpenSearch />
    </div>
  );
}

export default ListBooks;
