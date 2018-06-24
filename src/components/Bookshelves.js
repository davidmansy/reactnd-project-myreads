import React from 'react';
import data from '../data/data.json';
import Bookshelf from './Bookshelf';

function Bookshelves(props) {
  const shelves = data.shelves;
  const { books, handleShelfChange } = props;

  return (
    <div className="list-books-content">
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
  );
}

export default Bookshelves;
