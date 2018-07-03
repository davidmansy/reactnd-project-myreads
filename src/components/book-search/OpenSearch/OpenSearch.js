import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function OpenSearch(props) {
  const { searchPath, addControlLabel } = props;

  return (
    <div className="open-search">
      <Link to={searchPath}>{addControlLabel}</Link>
    </div>
  );
}

OpenSearch.propTypes = {
  searchPath: PropTypes.string.isRequired,
  addControlLabel: PropTypes.string.isRequired
};

export default OpenSearch;
