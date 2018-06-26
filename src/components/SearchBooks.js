import React, { Component } from 'react';
import SearchBooksBar from './SearchBooksBar';
import * as BooksAPI from '../BooksAPI';
import { debounce } from 'throttle-debounce';
import SearchBooksResults from './SearchBooksResults';

class SearchBooks extends Component {
  state = {
    query: '',
    books: [],
    isLoading: false,
    error: null,
    shelfHasBeenUpdated: false
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
      books: this.addBooksCategory(books),
      isLoading: false,
      error: null
    }));
  };

  handleSearchFailure = errorMessage => {
    this.setState({ error: errorMessage, isLoading: false });
  };

  addBooksCategory = books => {
    const { bookCatMap } = this.props;
    return books.map(book => {
      if (bookCatMap[book.id]) {
        book.shelf = bookCatMap[book.id];
      }
      return book;
    });
  };

  handleShelfChange = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.setState(currentState => {
        currentState.books.find(b => b.id === book.id).shelf = shelf;
        currentState.shelfHasBeenUpdated = true;
        return currentState;
      });
    });
  };

  onHandleClose = () => {
    if (this.state.shelfHasBeenUpdated) {
      this.props.onHandleClose();
    }
  };

  render() {
    const { query, books, error, isLoading } = this.state;

    return (
      <div className="search-books">
        <SearchBooksBar
          query={query}
          onHandleChange={event => {
            this.onHandleInputChange(event.target.value);
          }}
          onHandleClose={this.onHandleClose}
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

export default SearchBooks;
