import React, { Component } from 'react';
import '../styles/App.css';

import Game from '../components/Game';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Game />
      </div>
    );
  }
}

export default App;
