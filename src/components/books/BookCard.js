import React, { Component } from 'react';
import ShelMoveMenu from '../common/ShelfMoveMenu';

const BOOK_DETAILS_HIDE_CLASS = 'book-details-hidden';
const DATA_TRANSFER_ID = 'id';

class BookCard extends Component {
  state = {
    hideBook: false,
    active: false
  };

  onDragStart = (e, id) => {
    e.dataTransfer.setData(DATA_TRANSFER_ID, id);
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

  onMouseEnter = e => {
    if (this.props.draggable === 'true') {
      this.setState({
        active: true
      });
    }
  };

  onMouseLeave = e => {
    if (this.props.draggable === 'true') {
      this.setState({
        active: false
      });
    }
  };

  render() {
    const { book, handleShelfChange, draggable = 'false' } = this.props;
    const thumbnail = book.imageLinks ? book.imageLinks.thumbnail : null;
    const bookCoverStyle = {
      width: 128,
      height: 193,
      backgroundImage: `url(${thumbnail})`
    };
    const containerClass = this.state.hideBook ? BOOK_DETAILS_HIDE_CLASS : '';
    const bookClass = this.state.active ? 'book-active' : '';

    return (
      <div
        className={`book ${bookClass}`}
        onDragStart={e => {
          this.onDragStart(e, book.id);
        }}
        onDragEnd={this.onDragEnd}
        draggable={draggable}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
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
