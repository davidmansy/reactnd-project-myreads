import React, { Component } from 'react';
import data from '../data/data.json';

class ShelfMoveMenu extends Component {
  render() {
    const shelves = data.shelves;
    const { shelfId } = this.props;

    return (
      <select>
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
}

export default ShelfMoveMenu;
