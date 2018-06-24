import React from 'react';
import BookCard from './BookCard';

function BooksGrid(props) {
  const { books } = props;
  return (
    <ol className="books-grid">
      {books.map(book => {
        return (
          <li key={book.id}>
            <BookCard book={book} />
          </li>
        );
      })}
    </ol>
  );
}

export default BooksGrid;
