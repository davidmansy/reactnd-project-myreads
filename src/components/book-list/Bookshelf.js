import React from 'react';
import BooksGrid from '../books/BooksGrid';
import PropTypes from 'prop-types';

const DRAGGABLE_TRUTHY_VALUE = 'true';

function Bookshelf(props) {
  const { shelf, books, handleShelfChange } = props;
  const shelfBooks = books.filter(book => {
    return book.shelf === shelf.id;
  });

  return (
    <div className="bookshelf">
      <h3 className="bookshelf-title">{shelf.title}</h3>
      <div className="bookshelf-books">
        {shelfBooks.length > 0 ? (
          <BooksGrid
            books={shelfBooks}
            handleShelfChange={handleShelfChange}
            shelfId={shelf.id}
            draggable={DRAGGABLE_TRUTHY_VALUE}
          />
        ) : (
          <div className="bookshelf-empty">
            There are not books available in this shelf
          </div>
        )}
      </div>
    </div>
  );
}

Bookshelf.propTypes = {
  shelf: PropTypes.object.isRequired,
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleShelfChange: PropTypes.func.isRequired
};

export default Bookshelf;
