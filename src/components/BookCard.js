import React, { Component } from 'react';
import ShelMoveMenu from './ShelfMoveMenu';

class BookCard extends Component {
  handleShelfChange = event => {
    this.props.handleShelfChange(this.props.book, event.target.value);
  };

  render() {
    const { book } = this.props;
    const bookCoverStyle = {
      width: 128,
      height: 193,
      backgroundImage: `url(${book.imageLinks.thumbnail})`
    };
    const authors = book.authors.join(' ');

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={bookCoverStyle} />
          <div className="book-shelf-changer">
            <ShelMoveMenu
              selectedShelf={book.shelf}
              handleChange={this.handleShelfChange}
            />
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        {/*TODO: Use a list for the authors?*/}
        <div className="book-authors">{authors}</div>
      </div>
    );
  }
}

export default BookCard;
