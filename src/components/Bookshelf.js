import React from 'react';
import BooksGrid from './BooksGrid';

function Bookshelf(props) {
  const { shelf, books, handleShelfChange, loading } = props;
  const shelfBooks = books.filter(book => {
    return book.shelf === shelf.id;
  });

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{shelf.title}</h2>
      <div className="bookshelf-books">
        {loading ? (
          <div>Loading...</div>
        ) : shelfBooks.length > 0 ? (
          <BooksGrid books={shelfBooks} handleShelfChange={handleShelfChange} />
        ) : (
          <div>There are not books available in this shelf</div>
        )}
      </div>
    </div>
  );
}

export default Bookshelf;
