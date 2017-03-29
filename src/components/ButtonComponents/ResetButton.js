import React from 'react';

const ResetButton = ({click}) => {
  return(
    <button
      className="reset-button"
      onClick={click}>
      Start a New Game
    </button>
  );
}

export default ResetButton;
