import React from 'react';
import data from '../../data/data.json';
import Bookshelf from './Bookshelf';
import Loading from '../common/Loading/index';
import PropTypes from 'prop-types';

function Bookshelves(props) {
  const shelves = data.shelves;
  const { books, handleShelfChange, isLoading } = props;

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
