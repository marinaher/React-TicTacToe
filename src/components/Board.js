import React, { Component } from 'react';
import '../styles/index.css';
import Helpers from '../helpers';
import ResetButton from './ButtonComponents/ResetButton';
import Square from './Square';

class Board extends Component {
  constructor() {
    super();
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,  //toggle between 'X' and 'O'
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();

    if (Helpers.calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext
    });
  }

  renderSquare(i) {
    return <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)}/>;
  }

  resetGame() {
    this.setState({
      squares: Array(9).fill(null),
      xIsNext: true
    });
  }

  render() {
    const winner = Helpers.calculateWinner(this.state.squares);
    let status;

    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game-board">
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
        <div className="status">{status}</div>
        <ResetButton click={this.resetGame.bind(this)}/>
      </div>
    );
  }
}

export default Board;
