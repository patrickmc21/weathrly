import React from 'react';
import { shallow, mount } from 'enzyme';
import ErrorPage from '../lib/components/Error';

describe('ErrorPage component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ErrorPage updateWeather={'function'}/>)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should have a ')

  it('should have a div as the wrapper', () => {
    expect(wrapper.is('div')).toEqual(true);
  })

  it('should have an h2 with the text of Weathrly', () => {
    expect(wrapper.find('h2').text()).toEqual('Weathrly')
  })

  it('should have a p element with text that equals Please enter a new location', () => {
    expect(wrapper.find('p').text()).toEqual('Please Enter a New Location');
  })

  it('should have a Search component', () => {
    expect(wrapper.find('Search').length).toEqual(1);
  })

})