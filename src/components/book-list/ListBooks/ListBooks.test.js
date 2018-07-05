import React from 'react';
import ReactDOM from 'react-dom';
import TestRenderer from 'react-test-renderer';
import ListBooks from './ListBooks';
import { MemoryRouter } from 'react-router-dom';
import { cleanup } from 'react-testing-library';

afterEach(cleanup);

describe('ListBooks', () => {
  const props = {
    books: [],
    handleShelfChange: () => {},
    isLoading: false,
    searchPath: '/search'
  };

  it('renders', () => {
    const container = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <ListBooks {...props} />
      </MemoryRouter>,
      container
    );
  });

  it('snapshots', () => {
    const testRenderer = TestRenderer.create(
      <MemoryRouter>
        <ListBooks {...props} />
      </MemoryRouter>
    );
    let tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
