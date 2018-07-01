import React, { Component } from 'react';
import SearchBooksBar from './SearchBooksBar';
import * as BooksAPI from '../../data/BooksAPI';
import { debounce } from 'throttle-debounce';
import SearchBooksResults from './SearchBooksResults';
import PropTypes from 'prop-types';

const NO_CATEGORY = 'none';

class SearchBooks extends Component {
  state = {
    query: '',
    books: [],
    isLoading: false,
    error: null
  };

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  onHandleInputChange = query => {
    this.setState({ query, books: [], isLoading: false, error: null }, () => {
      this.search(query);
    });
  };

  search = debounce(400, query => {
    //Call API only if query string is not empty
    if (query.length) {
      this.setState({ isLoading: true }, () => {
        BooksAPI.search(query).then(books => {
          if (this._isMounted) {
            //Condition based on how the API handles error i.e. no error status received
            if (!books.error) {
              this.handleSearchSuccess(books);
            } else {
              this.handleSearchFailure(books.error);
            }
          }
        });
      });
    }
  });

  handleSearchSuccess = books => {
    this.setState(() => ({
      books: this.assignCategory(books),
      isLoading: false,
      error: null
    }));
  };

  handleSearchFailure = errorMessage => {
    this.setState({ error: errorMessage, isLoading: false });
  };

  assignCategory = books => {
    return books.map(book => {
      const bookWithCat = this.props.booksWithCat.find(b => b.id === book.id);
      book.shelf = bookWithCat ? bookWithCat.shelf : NO_CATEGORY;
      return book;
    });
  };

  handleShelfChange = (book, shelf) => {
    this.setState(currentState => {
      currentState.books.find(b => b.id === book.id).shelf = shelf;
      return currentState;
    });
    this.props.handleShelfChange(book, shelf);
  };

  render() {
    const { query, books, error, isLoading } = this.state;
    const { rootPath } = this.props;

    return (
      <div className="search-books">
        <SearchBooksBar
          query={query}
          onHandleChange={event => {
            this.onHandleInputChange(event.target.value);
          }}
          rootPath={rootPath}
        />
        <SearchBooksResults
          error={error}
          isLoading={isLoading}
          books={books}
          handleShelfChange={this.handleShelfChange}
        />
      </div>
    );
  }
}

SearchBooks.propTypes = {
  rootPath: PropTypes.string.isRequired,
  handleShelfChange: PropTypes.func.isRequired,
  booksWithCat: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default SearchBooks;
