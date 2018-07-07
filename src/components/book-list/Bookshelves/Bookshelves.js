import React from 'react';
import data from '../../../data/data.json';
import Bookshelf from '../Bookshelf/Bookshelf';
import Loading from '../../generic/Loading/index';
import PropTypes from 'prop-types';

function Bookshelves({ books, handleShelfChange, isLoading }) {
  const shelves = data.shelves;

  return (
    <div className="list-books-content">
      <div className="bookshelves">
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

Bookshelves.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleShelfChange: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default Bookshelves;
