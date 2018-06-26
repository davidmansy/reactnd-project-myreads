import React from 'react';
import * as BooksAPI from './BooksAPI';
import './styles/App.css';
import SearchBooks from './components/SearchBooks';
import ListBooks from './components/ListBooks';
import { Route } from 'react-router-dom';

class BooksApp extends React.Component {
  state = {
    books: [],
    isLoading: false,
    bookCatMap: {} //Built to speed up the data reconciliation with the search results
  };

  initBookCatMap(books) {
    return books.reduce((memo, book) => {
      memo[book.id] = book.shelf;
      return memo;
    }, {});
  }

  getAllBooks = () => {
    this.setState({ isLoading: true }, () => {
      BooksAPI.getAll().then(books => {
        this.setState({
          books,
          isLoading: false,
          bookCatMap: this.initBookCatMap(books)
        });
      });
    });
  };

  componentDidMount() {
    this.getAllBooks();
  }

  handleShelfChange = (book, shelf) => {
    this.setState({ isLoading: true }, () => {
      BooksAPI.update(book, shelf).then(() => {
        this.setState(currentState => {
          currentState.books.find(b => b.id === book.id).shelf = shelf;
          currentState.bookCatMap[book.id] = shelf;
          currentState.isLoading = false;
          return currentState;
        });
      });
    });
  };

  onHandleCloseSearch = () => {
    this.getAllBooks();
  };

  render() {
    const { books, isLoading, bookCatMap } = this.state;

    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <ListBooks
              books={books}
              isLoading={isLoading}
              handleShelfChange={this.handleShelfChange}
            />
          )}
        />
        <Route
          path="/search"
          render={() => (
            <SearchBooks
              bookCatMap={bookCatMap}
              onHandleClose={this.onHandleCloseSearch}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
