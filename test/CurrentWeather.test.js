import React from 'react';
import { shallow, mount } from 'enzyme';
import CurrentWeather from '../lib/components/CurrentWeather';
import data from '../lib/data/Mock-data';
import getCurrentWeather from '../lib/data-cleaners/current-weather-getter';

describe('CurrentWeather component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CurrentWeather forecast={getCurrentWeather(data)}/>)
  })

  it('should instantiate our good friend, CurrentWeather', () => {
    expect(wrapper).toBeDefined();
  })

  it('should use an article as a wrapper', () => {
    expect(wrapper.find('article').length).toEqual(1)
  })

  it('should have an h1 with the current location', () => {
    expect(wrapper.find('h1').length).toEqual(1);
    expect(wrapper.find('h1').text()).toEqual(wrapper.instance().props.forecast.city);
  })

  it('should have an h4 with the current temperature', () => {
    expect(wrapper.find('h4').length).toEqual(1);
    expect(wrapper.find('h4').text()).toEqual(`${wrapper.instance().props.forecast.currentTemp}°`);
  })

  it('should have a div wrapping the the time, condition, icon, high/low, and summary', () => {
    expect(wrapper.find('div').length).toEqual(1);
    expect(wrapper.find('div').find('h5').length).toEqual(3);
    expect(wrapper.find('div').find('img').length).toEqual(1);
    expect(wrapper.find('div').find('p').length).toEqual(2);
  })

  it('should have the first h5 with the current day of the week', () => {
    expect(wrapper.find('h5').first().text()).toEqual(wrapper.instance().props.forecast.currentTime[0])
  })

  it('should have the second h5 with the month and date', () => {
    expect(wrapper.find('div').childAt(1).text()).toEqual(`${wrapper.instance().props.forecast.currentTime[1]} ${wrapper.instance().props.forecast.currentTime[2]}`)
  })

  it('should have a third h5 with the current condition', () => {
    expect(wrapper.find('h5').last().text()).toEqual(`${wrapper.instance().props.forecast.currentCondition}`)
  })

  it('should have an image with the current conditions icon', () => {
    expect(wrapper.find('img').props().src).toEqual(wrapper.instance().props.forecast.icon)
  })

  it('should have a p tag with the high and low temp', () => {
    expect(wrapper.find('p').first().text()).toEqual(`${wrapper.instance().props.forecast.highTemp}°/${wrapper.instance().props.forecast.lowTemp}°`)
  })

  it('should have a summary of the current conditions in a p tag', () => {
    expect(wrapper.find('p').last().text()).toEqual(wrapper.instance().props.forecast.summary)
  })
})