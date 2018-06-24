import React, { Component } from 'react';
import SearchBooksBar from './SearchBooksBar';

class SearchBooks extends Component {
  state = {
    query: ''
  };

  onHandleInputChange = query => {
    this.setState(() => ({
      query
    }));
  };

  render() {
    const { query } = this.state;
    return (
      <div className="search-books">
        <SearchBooksBar
          query={query}
          onHandleChange={event => {
            this.onHandleInputChange(event.target.value);
          }}
        />
        <div className="search-books-results">
          <ol className="books-grid" />
        </div>
      </div>
    );
  }
}

export default SearchBooks;
