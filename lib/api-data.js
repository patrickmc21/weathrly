import key from './key';

const proxyurl = "https://cors-anywhere.herokuapp.com/";
const root = 'http://api.wunderground.com';

const retrieveWeather = (state, city) => {
  return fetch(`${root}/api/${key}/conditions/forecast10day/hourly/q/${city}/${state}.json`)
}

export default retrieveWeather;