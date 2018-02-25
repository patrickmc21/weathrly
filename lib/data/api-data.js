import key from '../key';

const proxyurl = "https://cors-anywhere.herokuapp.com/";
const root = 'http://api.wunderground.com';

const retrieveWeather = (location) => {
  return fetch(`${root}/api/${key}/conditions/forecast10day/hourly/q/${location}.json`)
}

export default retrieveWeather;