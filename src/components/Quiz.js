import React, { Component } from 'react';

class Quiz extends Component {
  render() {

    const randomNumber = Math.floor(Math.random() * this.props.statesAndCapitals.length); 

    const selectOptions = this.props.statesAndCapitals.map((stateAndCapital) => {
        return <option key={stateAndCapital.capital} value={stateAndCapital.capital}>{stateAndCapital.capital}</option>
    })
    return (
      <div>
        <div className="quiz">
          State: {this.props.statesAndCapitals[randomNumber].name}
        </div>

        <div>
          <div className="answerOptionsLabel">Answer: </div>
          <div className="selectBox">
            <select>
              {selectOptions}
            </select>
          </div>
        </div>
        
      </div>


    );
  }
}

export default Quiz;
