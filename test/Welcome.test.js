import React from 'react';
import { shallow, mount } from 'enzyme';
import Welcome from '../lib/components/Welcome';

describe('Welcome component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Welcome updateWeather={jest.fn()}/>)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should have an h2 with text Weathrly', () => {
    expect(wrapper.find('h2').text()).toEqual('Weathrly')
  })

  it('should have a p tag with a greeting', () => {
    expect(wrapper.find('p').length).toEqual(1);
    expect(wrapper.find('p').text().includes('Good')).toEqual(true);
  })

  it('should have a state that is the current hour', () => {
    expect(wrapper.instance().state.time).toEqual(new Date().getHours())
  })

  it('should have a p tag with a greeting that changes based on the time', () => {
    wrapper.instance().setState({time: 10});
    expect(wrapper.find('p').text()).toEqual('Good Morning');
    wrapper.instance().setState({time: 13});
    expect(wrapper.find('p').text()).toEqual('Good Afternoon');
    wrapper.instance().setState({time: 19});
    expect(wrapper.find('p').text()).toEqual('Good Evening');
  })

  it('should have a Search component', () => {
    expect(wrapper.find('Search')).toBeDefined()
  })

})