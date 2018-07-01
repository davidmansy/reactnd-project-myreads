import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function OpenSearch(props) {
  return (
    <div className="open-search">
      <Link to={props.searchPath}>Add a book</Link>
    </div>
  );
}

OpenSearch.propTypes = {
  searchPath: PropTypes.string.isRequired
};

export default OpenSearch;
