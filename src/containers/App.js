import React, { Component } from 'react';
import '../styles/index.css';

import Board from '../components/Board';

class App extends Component {
  render() {
    const title = 'Tic \nTac \nToe';

    return (
      <div className="container">
        <div className="gameMenu">
          <div className="game-title">
            <h1 className="display-linebreak">{title}</h1>
          </div>

          <Board />
        </div>
      </div>
    );
  }
}

export default App;
