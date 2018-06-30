import React from 'react';
import loadingSpinner from './spinner.gif';

function Loading() {
  return (
    <div className="spinner-container">
      <img src={loadingSpinner} alt="Loading spinner" />
    </div>
  );
}

export default Loading;
