import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../lib/components/App';

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
    expect(wrapper.state('currentWeather')).toEqual( '');
  })

  it('should initially start with a state of sevenHour set to an empty string', () => {
    expect(wrapper.state('sevenHour')).toEqual('');
  })

  it('should initially start with a state of tenDay set to an empty string', () => {
    expect(wrapper.state('tenDay')).toEqual( '' );
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
    wrapper.instance().setState({data: true});
    expect(wrapper.find('Header').length).toEqual(1);
  })

  it('should render the CurrentWeather component if location data is present', () => {
    wrapper.instance().setState({data: true});
    expect(wrapper.find('CurrentWeather').length).toEqual(1);
  })
  
  it('should render the SevenHour component if location data is present', () => {
    wrapper.instance().setState({data: true});
    expect(wrapper.find('SevenHour').length).toEqual(1);
  })

  it('should render the TenDay component if location data is present', () => {
    wrapper.instance().setState({data: true});
    expect(wrapper.find('TenDay').length).toEqual(1);
  })

  it('should render the ErrorPage component if error is true', () => {
    wrapper.instance().setState({error: true});
    expect(wrapper.find('ErrorPage').length).toEqual(1);
  })

})

describe.skip('App component mount', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App/>)
  })
  it('should retrieve data from local storage on mount', () => {
    localStorage.setItem('location', 'Denver, CO')

    expect(wrapper.instance().getFromStorage).toHaveBeenCalledTimes(1);
  })
})