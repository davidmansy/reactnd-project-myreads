import React from 'react';
import ReactDOM from 'react-dom';
import TestRenderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import OpenSearch from './OpenSearch';
import { Link, MemoryRouter } from 'react-router-dom';

describe('OpenSearch', () => {
  const props = { searchPath: '/path', addControlLabel: 'add' };

  it('renders', () => {
    const container = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <OpenSearch {...props} />
      </MemoryRouter>,
      container
    );
    ReactDOM.unmountComponentAtNode(container);
  });
  it('displays the correct Link', () => {
    const wrapper = shallow(
      <OpenSearch searchPath="/path" addControlLabel="add" />
    );
    const link = <Link to="/path">add</Link>;
    expect(wrapper.contains(link)).toEqual(true);
  });
  it('snapshots', () => {
    const testRenderer = TestRenderer.create(
      <MemoryRouter>
        <OpenSearch {...props} />
      </MemoryRouter>
    );
    let tree = testRenderer.toJSON();
    expect(tree).toMatchSnapshot();
    testRenderer.unmount();
  });
});
