import React from 'react';

const ResetButton = ({click}) => {
  return(
    <button
      className="reset-button"
      onClick={click}>
      Reset Game
    </button>
  );
}

export default ResetButton;
