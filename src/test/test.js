import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App.js';
import Quiz from '../components/Quiz.js';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { expect } from 'chai';
import { shallow, render } from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });


describe('App', function() {
  describe('appComponent', function() {
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

  });
});



