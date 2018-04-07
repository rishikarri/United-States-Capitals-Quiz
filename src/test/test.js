import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App.js';
import Quiz from '../components/Quiz.js';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import { shallow, render } from 'enzyme';
import sinon from 'sinon';

Enzyme.configure({ adapter: new Adapter() });

const spy = sinon.spy(); 

spy('Hello', 'World');

//now we can get information about hte call

console.log(spy.firstCall);


describe('US States and Capitals Quiz', function() {
  describe('App', function() {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<App />, div);
      ReactDOM.unmountComponentAtNode(div);
    });
    
    it('renders the quiz component ', () => {
      const wrapper = shallow(<App />);
      expect(wrapper.find(Quiz)).to.have.length(1);
    });

  });

  describe('Quiz', function() {
    it('renders a state name and the text State:', () => {

      // const sampleArray = [{name: "Alabama", capital: "Montgomery"}, {name: "Alaska", capital: "Juneau"}, {name: "Arizona", capital: "Pheonix"}];
      const sampleArray = [{name: "Alabama", capital: "Montgomery"}];
      const wrapper = shallow(<Quiz statesAndCapitals={sampleArray} />);
      expect(wrapper.find(".quiz").text()).to.be.equal(`State: ${sampleArray[0].name}`);
    });    

    it('renders an Answer label', () => {
      const sampleArray = [{name: "Alabama", capital: "Montgomery"}, {name: "Alaska", capital: "Juneau"}, {name: "Arizona", capital: "Pheonix"}];      
      const wrapper = shallow(<Quiz statesAndCapitals={sampleArray} />);
      expect(wrapper.find(".answerOptionsLabel").text()).to.be.equal("Answer: ");
    });

    it('renders a list of potential answers: ', () => {
      const sampleArray = [{name: "Alabama", capital: "Montgomery"}, {name: "Alaska", capital: "Juneau"}, {name: "Arizona", capital: "Pheonix"}];      
      const wrapper = shallow(<Quiz statesAndCapitals={sampleArray} />);
      
      const selectOptions = sampleArray.map((stateAndCapital) => {
        return <option key={stateAndCapital.capital} value={stateAndCapital.capital}>{stateAndCapital.capital}</option>
      });


      expect(wrapper.find(<select>{selectOptions}</select>)).to.have.length(1);
    });

  });
});



