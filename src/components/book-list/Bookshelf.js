import React from 'react';
import BooksGrid from '../books/BooksGrid';

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
            draggable="true"
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

export default Bookshelf;
