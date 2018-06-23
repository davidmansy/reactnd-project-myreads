import React from 'react';
// import * as BooksAPI from './BooksAPI'
import './styles/App.css';
import SearchBooks from './components/SearchBooks';
import ListBooks from './components/ListBooks';
import { Route } from 'react-router-dom';

class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => <ListBooks />} />
        <Route path="/search" render={() => <SearchBooks />} />
      </div>
    );
  }
}

export default BooksApp;
