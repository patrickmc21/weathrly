import React from 'react';
import { shallow, mount } from 'enzyme';
import SevenHour from '../lib/components/SevenHour';
import data from '../lib/data/Mock-data';
import getSevenHour from '../lib/data-cleaners/seven-hour-getter';

describe('SevenHour component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SevenHour array={getSevenHour(data)}/>)
  })

  it('should should instantiate our good friend, SevenHour', () => {
    expect(wrapper).toBeDefined();
  })

  it('should have a article tag as a wrapper', () => {
    expect(wrapper.is('article')).toEqual(true);
  })

  it('should produce Card components', () => {
    expect(wrapper.childAt(0).is('Card')).toEqual(true);
  })

  it('should produce as many Card components as elements in its array prop', () => {
    expect(wrapper.instance().props.array.length).toEqual(7);
    expect(wrapper.find('Card').length).toEqual(7);
  })

  it('should pass forecast props to Card components relative to the index of its own array prop', () => {
    expect(wrapper.childAt(0).props().array[0]).toEqual(wrapper.instance().props.array[0].hour);
    expect(wrapper.childAt(2).props().array[0]).toEqual(wrapper.instance().props.array[2].hour)
    expect(wrapper.childAt(4).props().array[0]).toEqual(wrapper.instance().props.array[4].hour)
    expect(wrapper.childAt(6).props().array[0]).toEqual(wrapper.instance().props.array[6].hour)
  })

})