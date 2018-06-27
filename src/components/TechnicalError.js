import React from 'react';

function TechnicalError(props) {
  const { error } = props;
  return <div>Uh oh! Something went wrong: {error}.</div>;
}

export default TechnicalError;
