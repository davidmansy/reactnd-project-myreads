import React, { Component } from 'react';
import BookCard from './BookCard';
import PropTypes from 'prop-types';

const DATA_TRANSFER_ID = 'id';
const DRAG_AND_DROP_MOVE_EFFECT = 'move';

class BooksGrid extends Component {
  onDrop = e => {
    const { handleShelfChange, shelfId } = this.props;
    const id = e.dataTransfer.getData(DATA_TRANSFER_ID);
    handleShelfChange({ id: id }, shelfId);
  };

  onDragOver = e => {
    e.preventDefault();
    e.dataTransfer.dropEffect = DRAG_AND_DROP_MOVE_EFFECT;
  };

  render() {
    const { books, handleShelfChange, draggable } = this.props;

    return (
      <ol
        className="books-grid"
        onDragOver={this.onDragOver}
        onDrop={this.onDrop}
      >
        {books.map(book => {
          return (
            <li key={book.id}>
              <BookCard
                book={book}
                handleShelfChange={handleShelfChange}
                draggable={draggable}
              />
            </li>
          );
        })}
      </ol>
    );
  }
}

BooksGrid.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleShelfChange: PropTypes.func.isRequired,
  draggable: PropTypes.string,
  shelfId: PropTypes.string
};

export default BooksGrid;
