import React from 'react';
import ShelMoveMenu from '../common/ShelfMoveMenu';

function BookCard(props) {
  const { book, handleShelfChange } = props;
  const thumbnail = book.imageLinks ? book.imageLinks.thumbnail : null;
  const bookCoverStyle = {
    width: 128,
    height: 193,
    backgroundImage: `url(${thumbnail})`
  };

  return (
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={bookCoverStyle} />
        <div className="book-shelf-changer">
          <ShelMoveMenu
            selectedShelf={book.shelf}
            handleChange={event => {
              handleShelfChange(book, event.target.value);
            }}
          />
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">{book.authors}</div>
    </div>
  );
}

export default BookCard;
