import key from '../key';

const root = 'http://api.wunderground.com';
const conditions = 'conditions/forecast10day/hourly/q';

const retrieveWeather = (location) => {
  return fetch(`${root}/api/${key}/${conditions}/${location}.json`);
};

export default retrieveWeather;