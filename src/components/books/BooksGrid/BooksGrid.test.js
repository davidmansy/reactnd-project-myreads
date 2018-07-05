import React from 'react';
import ReactDOM from 'react-dom';
import TestRenderer from 'react-test-renderer';
import BooksGrid from './BooksGrid';
import { MemoryRouter } from 'react-router-dom';
import { cleanup } from 'react-testing-library';

afterEach(cleanup);

describe('BooksGrid', () => {
  const props = {
    books: [],
    handleShelfChange: () => {},
    draggable: 'false',
    shelfId: 'read'
  };

  it('renders', () => {
    const container = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <BooksGrid {...props} />
      </MemoryRouter>,
      container
    );
  });

  it('snapshots', () => {
    const testRenderer = TestRenderer.create(
      <MemoryRouter>
        <BooksGrid {...props} />
      </MemoryRouter>
    );
    let tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
