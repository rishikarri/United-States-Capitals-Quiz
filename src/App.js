import React, { Component } from 'react';
import statesData  from './data/statesData.js';
import Quiz from './components/Quiz.js';
import './App.css';

class App extends Component {

  
  render() {
        
    const statesKeys = Object.keys(statesData); 

    const statesAndCapitals = statesKeys.map((stateKey) => {
      return {
        name: statesData[stateKey].name,
        capital: statesData[stateKey].capital,        
      };
    });    
    
    return (
      <div className="application">
        <Quiz statesAndCapitals={statesAndCapitals}/>
      </div>
    );
  }
}

export default App;
