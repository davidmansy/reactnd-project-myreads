import React from 'react';
import BooksGrid from './BooksGrid';

function Bookshelf(props) {
  const { shelf, books, handleShelfChange } = props;
  const shelfBooks = books.filter(book => {
    return book.shelf === shelf.id;
  });

  return (
    <div className="bookshelf">
      {/*TODO Add a view to handle an empty shelf*/}
      <h2 className="bookshelf-title">{shelf.title}</h2>
      <div className="bookshelf-books">
        <BooksGrid books={shelfBooks} handleShelfChange={handleShelfChange} />
      </div>
    </div>
  );
}

export default Bookshelf;
