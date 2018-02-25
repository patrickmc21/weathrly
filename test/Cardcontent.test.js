import React from 'react';
import { shallow, mount } from 'enzyme';
import CardContent from '../lib/components/CardContent';

describe('CardContent component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CardContent weatherInfo="hello"/>)
  })

  it('should instantiate our good friend, CardContent', () => {
    expect(wrapper).toBeDefined();
  })

  it('should return a li', () => {
    expect(wrapper.find('li').length).toEqual(1)
  })

  it('should have text equal to its prop', () => {
    expect(wrapper.instance().props.weatherInfo).toEqual('hello');
    expect(wrapper.find('li').text()).toEqual('hello')
  })

})