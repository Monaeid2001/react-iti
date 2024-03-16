// ProgressBarComponent.js
import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

const ProgressBarComponent = ({ variant, now, word }) => {
  return (
    <div>
      <span>{word}</span>
      <ProgressBar variant={variant} now={now} />
    </div>
  );
};

export default ProgressBarComponent;
