import React from 'react';
import { shallow, mount } from 'enzyme';
import TenDay from '../lib/components/TenDay';
import data from '../lib/data/Mock-data';
import getTenDay from '../lib/data-cleaners/ten-day-getter';

describe('TenDay component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<TenDay array={getTenDay(data)}/>)
  })

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  })

  it('should have a section tag as a wrapper', () => {
    expect(wrapper.is('section')).toEqual(true);
  })

  it('should produce Card components', () => {
    expect(wrapper.childAt(0).is('Card')).toEqual(true);
  })

  it('should produce as many Card components as elements in its array prop', () => {
    expect(wrapper.instance().props.array.length).toEqual(10);
    expect(wrapper.find('Card').length).toEqual(10);
  })

  it('should pass forecast props to Card components relative to the index of its own array prop', () => {
    expect(wrapper.childAt(0).props().array[0]).toEqual(wrapper.instance().props.array[0].day);
    expect(wrapper.childAt(3).props().array[0]).toEqual(wrapper.instance().props.array[3].day)
    expect(wrapper.childAt(5).props().array[0]).toEqual(wrapper.instance().props.array[5].day)
    expect(wrapper.childAt(7).props().array[0]).toEqual(wrapper.instance().props.array[7].day)
    expect(wrapper.childAt(9).props().array[0]).toEqual(wrapper.instance().props.array[9].day)
  })

})