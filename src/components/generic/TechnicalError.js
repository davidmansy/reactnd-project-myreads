import React from 'react';
import PropTypes from 'prop-types';

function TechnicalError({ errorMessage }) {
  return (
    <div className="technical-error">
      Uh oh! Something went wrong: {errorMessage}.
    </div>
  );
}

TechnicalError.propTypes = {
  errorMessage: PropTypes.string.isRequired
};

export default TechnicalError;
