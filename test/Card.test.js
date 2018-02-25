import React from 'react';
import { shallow, mount } from 'enzyme';
import Card from '../lib/components/Card';

describe('Card component shallow', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Card cardClass="tenHour" array={[1]}/>);
  })

  it('should instantiate our good friend, Card', () => {
    expect(wrapper).toBeDefined();
  })

  it('should have a wrapper element of article', () => {
    expect(wrapper.find('article').length).toEqual(1);
  })

  it('should have an unorderd list', () => {
    expect(wrapper.find('ul').length).toEqual(1);
  })

  it('should render the CardContent component', () => {
    expect(wrapper.find('CardContent').length).toEqual(1);
  })

  it('should assign its cardClass prop to the article ', () => {
    expect(wrapper.instance().props.cardClass).toEqual('tenHour');
    expect(wrapper.find('article').props().className).toEqual('tenHour');
  })

  it('should assign the elements of its array prop to CardContent', () => {
    expect(wrapper.instance().props.array).toEqual([1]);
    expect(wrapper.find('CardContent').props().weatherInfo).toEqual(1);
  })

})