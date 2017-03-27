import React from 'react';

import '../styles/index.css';

class Header extends React.Component{
  render() {
    return(
      <div className="game-header">
        <h1 className="tictactoe-title">
          Tic <br/> Tac <br/> Toe
        </h1>
      </div>
    );
  }
}

export default Header;
