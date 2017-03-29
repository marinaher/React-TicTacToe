import React from 'react';

const GameTitle = (props) => {
  return(
    <div className="game-title">
      <h1 className="tictactoe-title">{props.title}</h1>
    </div>
  );
}

export default GameTitle;
