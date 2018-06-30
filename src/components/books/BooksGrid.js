import React, { Component } from 'react';
import BookCard from './BookCard';

const DATA_TRANSFER_ID = 'id';

class BooksGrid extends Component {
  onDrop = e => {
    const { handleShelfChange, shelfId } = this.props;
    const id = e.dataTransfer.getData(DATA_TRANSFER_ID);
    handleShelfChange({ id: id }, shelfId);
  };

  render() {
    const { books, handleShelfChange, draggable } = this.props;

    return (
      <ol
        className="books-grid"
        onDragOver={e => e.preventDefault()}
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

export default BooksGrid;
