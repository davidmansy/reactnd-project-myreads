import React from 'react';
import data from '../../data/data.json';
import PropTypes from 'prop-types';

function ShelfMoveMenu(props) {
  const shelves = data.shelves;
  const { selectedShelf = 'none', handleChange } = props;

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
