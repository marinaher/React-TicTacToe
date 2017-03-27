import React, { Component } from 'react';
import '../styles/App.css';

import Board from '../components/Board';
import GameTitle from '../components/GameTitle';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="gameMenu">
          <GameTitle />
          <Board />
        </div>
      </div>
    );
  }
}

export default App;
