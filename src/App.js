import React from 'react';
import * as BooksAPI from './BooksAPI';
import './styles/App.css';
import SearchBooks from './components/SearchBooks';
import ListBooks from './components/ListBooks';
import { Route } from 'react-router-dom';

class BooksApp extends React.Component {
  state = {
    books: [],
    isLoading: false
  };

  getAllBooks = () => {
    this.setState({ isLoading: true }, () => {
      BooksAPI.getAll().then(books => {
        this.setState({
          books,
          isLoading: false
        });
      });
    });
  };

  componentDidMount() {
    this.getAllBooks();
  }

  handleShelfChange = (book, shelf) => {
    this.setState(currentState => {
      currentState.books.find(b => b.id === book.id).shelf = shelf;
      return currentState;
    });
    BooksAPI.update(book, shelf);
  };

  render() {
    const { books, isLoading } = this.state;

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
              booksWithCat={books}
              handleShelfChange={this.handleShelfChange}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
