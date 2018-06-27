import React from 'react';
import data from '../data/data.json';
import Bookshelf from './Bookshelf';
import Loading from './Loading/Loading';

function Bookshelves(props) {
  const shelves = data.shelves;
  const { books, handleShelfChange, isLoading } = props;

  return (
    <div className="list-books-content">
      <div>
        {isLoading ? (
          <Loading />
        ) : (
          shelves.map(shelf => (
            <Bookshelf
              key={shelf.id}
              shelf={shelf}
              books={books}
              handleShelfChange={handleShelfChange}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Bookshelves;
