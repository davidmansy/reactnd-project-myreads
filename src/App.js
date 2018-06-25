import React from 'react';
import * as BooksAPI from './BooksAPI';
import './styles/App.css';
import SearchBooks from './components/SearchBooks';
import ListBooks from './components/ListBooks';
import { Route } from 'react-router-dom';

class BooksApp extends React.Component {
  state = {
    books: [],
    loading: true,
    bookCatMap: {} //Built to speed up the data reconciliation with the search results
  };

  //TODO: Use Reduce to build the object
  initBookCatMap(books) {
    const bookCatMap = {};
    books.forEach(book => {
      bookCatMap[book.id] = book.shelf;
    });
    return bookCatMap;
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      const bookCatMap = this.initBookCatMap(books);
      this.setState({
        books,
        loading: false,
        bookCatMap
      });
    });
  }

  handleShelfChange = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.setState(currentState => {
        const updatedBook = currentState.books.find(b => {
          return b.id === book.id;
        });
        updatedBook.shelf = shelf;
        currentState.bookCatMap[updatedBook.id] = shelf; //Update the bookCatMap
        return currentState;
      });
    });
  };

  render() {
    const { books, loading, bookCatMap } = this.state;

    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <ListBooks
              books={books}
              loading={loading}
              handleShelfChange={this.handleShelfChange}
            />
          )}
        />
        <Route
          path="/search"
          render={() => <SearchBooks bookCatMap={bookCatMap} />}
        />
      </div>
    );
  }
}

export default BooksApp;
