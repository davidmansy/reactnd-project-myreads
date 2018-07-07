import React from 'react';
import data from '../../data/data.json';
import PropTypes from 'prop-types';

function ShelfMoveMenu({ selectedShelf = 'none', handleChange }) {
  const shelves = data.shelves;

  return (
    <select value={selectedShelf} onChange={handleChange}>
      <option value="move" disabled>
        Move to...
      </option>
      {shelves.map(shelf => {
        return (
          <option key={shelf.id} value={shelf.id}>
            {shelf.title}
          </option>
        );
      })}
      <option value="none">None</option>
    </select>
  );
}

ShelfMoveMenu.propTypes = {
  selectedShelf: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default ShelfMoveMenu;
