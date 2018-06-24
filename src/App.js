import React from 'react';
import * as BooksAPI from './BooksAPI';
import './styles/App.css';
import SearchBooks from './components/SearchBooks';
import ListBooks from './components/ListBooks';
import { Route } from 'react-router-dom';
import data from './data/data.json';

class BooksApp extends React.Component {
  state = {
    shelves: data.shelves,
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
    const { shelves, books } = this.state;
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <ListBooks
              shelves={shelves}
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
