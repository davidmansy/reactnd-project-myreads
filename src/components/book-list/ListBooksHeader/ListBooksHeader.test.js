import React from 'react';
import ReactDOM from 'react-dom';
import TestRenderer from 'react-test-renderer';
import ListBooksHeader from './ListBooksHeader';
import { MemoryRouter } from 'react-router-dom';
import { cleanup } from 'react-testing-library';

afterEach(cleanup);

describe('ListBooksHeader', () => {
  const props = {
    title: 'title'
  };

  it('renders', () => {
    const container = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <ListBooksHeader {...props} />
      </MemoryRouter>,
      container
    );
  });

  it('snapshots', () => {
    const testRenderer = TestRenderer.create(
      <MemoryRouter>
        <ListBooksHeader {...props} />
      </MemoryRouter>
    );
    let tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
