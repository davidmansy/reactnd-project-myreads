import React, { Component } from 'react';
import BookCard from './BookCard';

class BooksGrid extends Component {
  onDrop = e => {
    const { handleShelfChange, shelfId } = this.props;
    const id = e.dataTransfer.getData('id');
    handleShelfChange({ id: id }, shelfId);
  };

  render() {
    const { books, handleShelfChange } = this.props;

    return (
      <ol
        className="books-grid"
        onDragOver={e => e.preventDefault()}
        onDrop={this.onDrop}
      >
        {books.map(book => {
          return (
            <li key={book.id}>
              <BookCard book={book} handleShelfChange={handleShelfChange} />
            </li>
          );
        })}
      </ol>
    );
  }
}

export default BooksGrid;
