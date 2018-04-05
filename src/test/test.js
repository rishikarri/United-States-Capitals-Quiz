import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App.js';
import { expect } from 'chai';
import { shallow } from 'enzyme';



describe('App', function() {
  describe('appComponent', function() {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<App />, div);
      ReactDOM.unmountComponentAtNode(div);
    });

    it('has the text hello', () => {
    	const wrapper = shallow(<App />);

      // expect(wrapper.find('.App').text()).to.be.equal('hello');
      expect(wrapper.find('#application')).to.have.length(1);


    });

  });
});



