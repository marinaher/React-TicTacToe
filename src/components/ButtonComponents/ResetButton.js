import React, { Component } from 'react';

export default class ResetButton extends Component {
  render() {
    return(
      <button
        className="reset-button"
        onClick={this.props.reset}>
        Reset Game
      </button>
    );
  }
}
