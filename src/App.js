import React from 'react';
import * as BooksAPI from './BooksAPI';
import './styles/App.css';
import SearchBooks from './components/SearchBooks';
import ListBooks from './components/ListBooks';
import { Route } from 'react-router-dom';

class BooksApp extends React.Component {
  state = {
    books: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState(() => ({
        books
      }));
    });
  }

  handleShelfChange = (book, shelf) => {
    BooksAPI.update(book, shelf).then(jsonRes => {
      this.setState(currentState => {
        const updatedBook = currentState.books.find(b => {
          return b.id === book.id;
        });
        updatedBook.shelf = shelf;
        return currentState;
      });
    });
  };

  render() {
    const { books } = this.state;

    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <ListBooks
              books={books}
              handleShelfChange={this.handleShelfChange}
            />
          )}
        />
        <Route path="/search" render={() => <SearchBooks />} />
      </div>
    );
  }
}

export default BooksApp;
