import React from 'react';
import PropTypes from 'prop-types';

function ListBooksHeader(props) {
  return (
    <div className="list-books-title">
      <h1>{props.title}</h1>
    </div>
  );
}

ListBooksHeader.propTypes = {
  title: PropTypes.string.isRequired
};

export default ListBooksHeader;
