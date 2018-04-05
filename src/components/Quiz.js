import React, { Component } from 'react';

class Quiz extends Component {
  render() {

    const randomNumber = Math.floor(Math.random() * this.props.statesAndCapitals.length); 
    return (
      <div className="quiz">
        State: {this.props.statesAndCapitals[randomNumber].name}
      </div>
    );
  }
}

export default Quiz;
