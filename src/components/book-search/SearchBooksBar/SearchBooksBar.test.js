import React from 'react';
import ReactDOM from 'react-dom';
import TestRenderer from 'react-test-renderer';
import SearchBooksBar from './SearchBooksBar';
import { MemoryRouter } from 'react-router-dom';
import { cleanup } from 'react-testing-library';

afterEach(cleanup);

describe('SearchBooksBar', () => {
  const props = {
    query: '',
    onHandleChange: () => {},
    rootPath: '/'
  };

  it('renders', () => {
    const container = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <SearchBooksBar {...props} />
      </MemoryRouter>,
      container
    );
  });

  it('snapshots', () => {
    const testRenderer = TestRenderer.create(
      <MemoryRouter>
        <SearchBooksBar {...props} />
      </MemoryRouter>
    );
    let tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
