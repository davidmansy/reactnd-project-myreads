import React from 'react';
import ReactDOM from 'react-dom';
import TestRenderer from 'react-test-renderer';
import SearchBooks from './SearchBooks';
import { MemoryRouter } from 'react-router-dom';
import { cleanup } from 'react-testing-library';

afterEach(cleanup);

describe('SearchBooks', () => {
  const props = {
    rootPath: '/',
    handleShelfChange: () => {},
    booksWithCat: []
  };

  it('renders', () => {
    const container = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <SearchBooks {...props} />
      </MemoryRouter>,
      container
    );
  });

  it('snapshots', () => {
    const testRenderer = TestRenderer.create(
      <MemoryRouter>
        <SearchBooks {...props} />
      </MemoryRouter>
    );
    let tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
  });

  //TODO: Test it applies the right category eg assign category function
  //Mock the search to get a list of books
  //Pass a prop as array of books with categories
  //check that the list of books is updated with the categories

  //TODO: Test that if input updated and query string is empty, don't call search
  //TODO: Test that if input updated and query string is not empty, call search with query string

  //Test that if handleSearchSuccess, the state is updated with the returned books
});
