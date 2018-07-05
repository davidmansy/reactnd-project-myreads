import React, { Component } from 'react';
import ShelMoveMenu from '../../common/ShelfMoveMenu';
import PropTypes from 'prop-types';

const BOOK_CLASS = 'book';
const BOOK_ACTIVE_CLASS = 'book-active';
const BOOK_DETAILS_CONTAINER_CLASS = 'book-details-container';
const BOOK_DETAILS_HIDDEN_CONTAINER_CLASS = 'book-details-container-hidden';
const DATA_TRANSFER_ID = 'id';

class BookCard extends Component {
  state = {
    hidden: false,
    active: false
  };

  onDragStart = (e, id) => {
    e.dataTransfer.setData(DATA_TRANSFER_ID, id);
    setTimeout(() => {
      this.setState({
        hidden: true
      });
    });
  };

  onDragEnd = e => {
    this.setState({
      hidden: false
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
    const { book, handleShelfChange, draggable } = this.props;
    const thumbnail = book.imageLinks ? book.imageLinks.thumbnail : null;
    const bookCoverStyle = {
      width: 128,
      height: 193,
      backgroundImage: `url(${thumbnail})`
    };
    const containerClass = this.state.hidden
      ? `${BOOK_DETAILS_CONTAINER_CLASS} ${BOOK_DETAILS_HIDDEN_CONTAINER_CLASS}`
      : `${BOOK_DETAILS_CONTAINER_CLASS}`;
    const bookClass = this.state.active
      ? `${BOOK_CLASS} ${BOOK_ACTIVE_CLASS}`
      : `${BOOK_CLASS}`;

    return (
      <div
        className={bookClass}
        onDragStart={e => {
          this.onDragStart(e, book.id);
        }}
        onDragEnd={this.onDragEnd}
        draggable={draggable}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
      >
        <div className={containerClass}>
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

BookCard.propTypes = {
  book: PropTypes.object.isRequired,
  handleShelfChange: PropTypes.func.isRequired,
  draggable: PropTypes.string
};

BookCard.defaultProps = {
  draggable: 'false'
};

export default BookCard;
