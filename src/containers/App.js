import React, { Component } from 'react';
import '../styles/App.css';

// import Game from '../components/Game';
import Board from '../components/Board';
import Header from '../components/Header';
import ResetButton from '../components/ButtonComponents/ResetButton';

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="gameMenu">
          <Header />
          <Board />
          <ResetButton />
        </div>
      </div>
    );
  }
}

export default App;
