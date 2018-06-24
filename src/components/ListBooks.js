import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Bookshelf from './Bookshelf';

function ListBooks(props) {
  const { shelves, books, handleShelfChange } = props;
  return (
    <div className="list-books">
      {/*TODO Replace by a header component*/}
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        {/*TODO Add a view to handle an empty shelf*/}
        <div>
          {shelves.map(shelf => (
            <Bookshelf
              key={shelf.id}
              shelf={shelf}
              books={books}
              handleShelfChange={handleShelfChange}
            />
          ))}
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
}

export default ListBooks;
