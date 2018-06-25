import React, { Component } from 'react';
import SearchBooksBar from './SearchBooksBar';
import * as BooksAPI from '../BooksAPI';
import { debounce } from 'throttle-debounce';
import BooksGrid from './BooksGrid';

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

  search = debounce(400, query => {
    if (query.length) {
      //No need to call API if no query
      this.setState({ isLoading: true }, () => {
        BooksAPI.search(query).then(books => {
          if (this._isMounted) {
            //Based on how the API handles error i.e. no error status received
            if (!books.error) {
              this.setState(() => ({
                books,
                isLoading: false,
                error: null
              }));
            } else {
              this.setState({ error: books.error, isLoading: false });
            }
          }
        });
      });
    }
  });

  onHandleInputChange = query => {
    this.setState({ query, books: [], isLoading: false, error: null }, () => {
      this.search(query);
    });
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
        />
        <div className="search-books-results">
          {error && <div>Uh oh! Something went wrong: {error}.</div>}
          {isLoading && <div>Loading...</div>}
          {!!books.length && <BooksGrid books={books} />}
        </div>
      </div>
    );
  }
}

export default SearchBooks;
