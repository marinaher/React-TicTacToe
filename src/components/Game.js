import React from 'react';

import '../styles/index.css';

import Board from './Board';
import Header from './Header';

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <Header />
        <Board />
      </div>
    );
  }
}

export default Game;
