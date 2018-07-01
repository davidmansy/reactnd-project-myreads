import React from 'react';
import * as BooksAPI from './data/BooksAPI';
import './styles/App.css';
import SearchBooks from './components/book-search/SearchBooks';
import ListBooks from './components/book-list/ListBooks';
import { Route } from 'react-router-dom';

const ROOT_PATH = '/';
const SEARCH_PATH = '/search';

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
      const updatedBook = currentState.books.find(b => b.id === book.id);
      if (updatedBook) {
        updatedBook.shelf = shelf;
      } else {
        currentState.books.push(book);
      }
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
          path={ROOT_PATH}
          render={() => (
            <ListBooks
              books={books}
              isLoading={isLoading}
              handleShelfChange={this.handleShelfChange}
              searchPath={SEARCH_PATH}
            />
          )}
        />
        <Route
          path={SEARCH_PATH}
          render={() => (
            <SearchBooks
              booksWithCat={books}
              handleShelfChange={this.handleShelfChange}
              rootPath={ROOT_PATH}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
