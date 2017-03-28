import React from 'react';
import '../styles/index.css';

import Board from '../components/Board';
import GameTitle from '../components/GameTitle';

const App = () => {
    return (
      <div className="container">
          <GameTitle title='Tic Tac Toe'/>
          <Board />
      </div>
    );
}

export default App;
