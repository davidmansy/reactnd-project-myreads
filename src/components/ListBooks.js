import React from 'react';
import ListBooksHeader from './ListBooksHeader';
import Bookshelves from './Bookshelves';
import OpenSearch from './OpenSearch';

function ListBooks(props) {
  const { books, handleShelfChange, loading } = props;

  return (
    <div className="list-books">
      <ListBooksHeader />
      <Bookshelves
        books={books}
        handleShelfChange={handleShelfChange}
        loading={loading}
      />
      <OpenSearch />
    </div>
  );
}

export default ListBooks;
