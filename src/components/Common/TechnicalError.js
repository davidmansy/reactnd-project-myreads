import React from 'react';
import PropTypes from 'prop-types';

function TechnicalError(props) {
  const { errorMessage } = props;
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
