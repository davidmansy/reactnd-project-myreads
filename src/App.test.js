import React from 'react';
import ReactDOM from 'react-dom';
import TestRenderer from 'react-test-renderer';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

describe('App', () => {
  it('renders', () => {
    const container = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>,
      container
    );
    ReactDOM.unmountComponentAtNode(container);
  });

  test('snapshots', () => {
    const testRenderer = TestRenderer.create(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    let tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
    testRenderer.unmount();
  });
});

// it('renders without crashing', () => {
//   const wrapper = mount(
//     <MemoryRouter initialEntries={['/']}>
//       <App />
//     </MemoryRouter>
//   );
//   expect(wrapper.contains(<div className="bookshelves">)).toEqual(true);
//   console.log(wrapper.debug());
//   wrapper.unmount();
// });
