import React, { Component } from 'react';
import '../styles/App.css';

import Board from '../components/Board';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="gameMenu">
          <div className="game-title">
            <h1>Tic <br/> Tac <br/> Toe</h1>
          </div>

          <Board />
        </div>
      </div>
    );
  }
}

export default App;
