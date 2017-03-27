import React from 'react';
import '../styles/index.css';
// import ResetButton from './ButtonComponents/ResetButton';

class Header extends React.Component{
  render() {
    return(
      <div className="game-header">
        <h1 className="tictactoe-title">
          Tic <br/> Tac <br/> Toe
        </h1>
        {/* <ResetButton /> */}
      </div>
    );
  }
}

export default Header;
