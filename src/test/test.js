import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App.js';
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

    it('has the text hello ', () => {
    	const wrapper = shallow(<App />);
      expect(wrapper.text()).to.equal('hello');

      // expect(wrapper.find('.application')).to.have.length(1);
    });

  });
});



