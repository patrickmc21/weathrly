import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../lib/components/App';
import PropTypes from 'prop-types';
import data from '../lib/data/Mock-data';
import getCurrentWeather from '../lib/data-cleaners/current-weather-getter';
import getSevenHour from '../lib/data-cleaners/seven-hour-getter';
import getTenDay from '../lib/data-cleaners/ten-day-getter';

describe('App component shallow', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App/>)
  })

  it('should instantiate our good friend, App', () => {
    expect(wrapper).toBeDefined();
  })

  it('should initially start with a state of data set to null', () => {
    expect(wrapper.state('data')).toEqual( null);
  })

  it('should initially start with a state of currentWeather set to an empty string', () => {
    expect(wrapper.state('currentWeather')).toEqual( {});
  })

  it('should initially start with a state of sevenHour set to an empty string', () => {
    expect(wrapper.state('sevenHour')).toEqual([]);
  })

  it('should initially start with a state of tenDay set to an empty string', () => {
    expect(wrapper.state('tenDay')).toEqual( [] );
  })

  it('should initially start with a state of location set to an empty string', () => {
    expect(wrapper.state('location')).toEqual('' );
  })

  it('should initially start with a state of background set to an empty string', () => {
    expect(wrapper.state('background')).toEqual('');
  })

  it('should initially start with a state of error set to false', () => {
    expect(wrapper.state('error')).toEqual(false);
  })

  it('should render the Welcome component', () => {
    expect(wrapper.find('Welcome').length).toEqual(1);
  })

  it('should render the Header component if location data is present', () => {
    wrapper.instance().setState({data});
    expect(wrapper.find('Header').length).toEqual(1);
  })

  it('should render the CurrentWeather component if location data is present', () => {
    wrapper.instance().setState({data});
    expect(wrapper.find('CurrentWeather').length).toEqual(1);
  })
  
  it('should render the SevenHour component if location data is present', () => {
    wrapper.instance().setState({data});
    expect(wrapper.find('SevenHour').length).toEqual(1);
  })

  it('should render the TenDay component if location data is present', () => {
    wrapper.instance().setState({data});
    expect(wrapper.find('TenDay').length).toEqual(1);
  })

  it('should render the ErrorPage component if error is true', () => {
    wrapper.instance().setState({error: true});
    expect(wrapper.find('ErrorPage').length).toEqual(1);
  })

})

describe('App component mount', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App/>)
    fetch.mockResponse(data, {status: 200});
    const weatherInfo = data
    })
  it('should send location data to local storage', () => {
    wrapper.instance().sendLocationToStorage('Denver, CO');
    expect(localStorage.getItem('location')).toEqual('Denver, CO');
  })

  it.skip('should set location state on page load if info is present', () => {
    wrapper.unmount();
    wrapper.mount()
    expect(wrapper.instance().state.location).toEqual('Denver,CO')
  })
})