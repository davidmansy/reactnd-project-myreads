import React, { Component } from 'react';
import ShelMoveMenu from '../common/ShelfMoveMenu';

class BookCard extends Component {
  state = {
    hideBook: false
  };

  onDragStart = (e, id) => {
    e.dataTransfer.setData('id', id);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.dropEffect = 'move';
    setTimeout(() => {
      this.setState({
        hideBook: true
      });
    });
  };

  onDragEnd = e => {
    this.setState({
      hideBook: false
    });
  };

  render() {
    const { book, handleShelfChange } = this.props;
    const thumbnail = book.imageLinks ? book.imageLinks.thumbnail : null;
    const bookCoverStyle = {
      width: 128,
      height: 193,
      backgroundImage: `url(${thumbnail})`
    };
    const containerClass = this.state.hideBook ? 'book-details-hidden' : '';

    return (
      <div
        className="book"
        draggable
        onDragStart={e => {
          this.onDragStart(e, book.id);
        }}
        onDragEnd={this.onDragEnd}
      >
        <div className={`book-details-container ${containerClass}`}>
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
      </div>
    );
  }
}

export default BookCard;
