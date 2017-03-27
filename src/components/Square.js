import React from 'react';

// class Square extends React.Component {
//   render() {
//     return (
//       <button className="square" onClick={() => this.props.onClick()}>
//         {this.props.value}
//       </button>
//     );
//   }
// }

// The above was rewritten to the below because we only needed a function that takes props and returns what should be rendered.

function Square(props) {
  return(
    <button
      className="square"
      onClick={() => props.onClick()}>
      {props.value}
    </button>
  );
}

export default Square;
