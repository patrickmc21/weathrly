import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from '../lib/components/Header';
import PropTypes from 'prop-types';


describe('Header component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Header updateWeather={jest.fn()}/>)
  })

  it('should instantiate our good friend, Header', () => {
    expect(wrapper).toBeDefined();
  })

  it('should have a main wrapper of a header element', () => {
    expect(wrapper.find('header').length).toEqual(1);
  })

  it('should have a h2 element with text Weathrly', () => {
    expect(wrapper.find('h2').text()).toEqual('Weathrly')
  })

  it('should render the Search component if error is true', () => {
    expect(wrapper.find('Search').length).toEqual(1);
  })

  it('should have one prop that passes the updateWeather function to Search', () => {
    expect(wrapper.props('updateWeather')).toBeDefined()
  })
})

