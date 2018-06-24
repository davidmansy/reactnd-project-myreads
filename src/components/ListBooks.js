import React from 'react';
import { Link } from 'react-router-dom';
import ListBooksHeader from './ListBooksHeader';
import Bookshelves from './Bookshelves';

function ListBooks(props) {
  const { books, handleShelfChange } = props;

  return (
    <div className="list-books">
      <ListBooksHeader />
      <Bookshelves books={books} handleShelfChange={handleShelfChange} />
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
}

export default ListBooks;
