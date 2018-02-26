const conditionsObject = {
  sunny: ['Clear'],
  snowy: [
    'Snow', 
    'Snow Grains', 
    'Ice Crystals',
    'Ice Pellets', 
    'Low Drifting Snow', 
    'Blowing Snow', 
    'Snow Showers', 
    'Snow Blowing Snow Mist', 
    'Ice Pellet Showers'],
  cloudy: [
    'Overcast', 
    'Partly Cloudy', 
    'Mostly Cloudy', 
    'Scattered Clouds'],
  rainy: [
    'Drizzle',
    'Rain', 
    'Mist', 
    'Spray', 
    'Rain Mist',
    'Rain Showers', 
    'Freezing Drizzle',
    'Freezing Rain'],
  foggy: [
    'Fog', 
    'Fog Patches', 
    'Freezing Fog', 
    'Patches of Fog', 
    'Shallow Fog',
    'Partial Fog', 
    'Haze'],
  stormy: [
    'Hail', 
    'Hail Showers', 
    'Small Hail Showers', 
    'Thunderstorm', 
    'Thunderstorms and Rain', 
    'Thunderstorms and Snow', 
    'Thunderstorms and Ice Pellets', 
    'Thunderstorms with Hail', 
    'Thunderstorms with Small Hail', 
    'Small Hail', 
    'Squalls', 
    'Funnel Cloud'],
  smoke: ['Smoke'],
  volcano: ['Volcanic Ash'],
  dusty: [
    'Widespread Dust', 
    'Sand', 
    'Dust Whirls', 
    'Sandstorm', 
    'Low Drifting Widespread Dust', 
    'Low Drifting Sand', 
    'Blowing Widespread Dust',
    'Blowing Sand']
};

const getBackgroundState = (data) => {
  const currentCondition = data.current_observation.weather;
  let background;

  background = Object.keys(conditionsObject).find(condition => {
    let truth;

    conditionsObject[condition].forEach(type => {
      if (type === currentCondition) {
        truth = true;
      }
    });
    return truth;
  });
  if (background === 'sunny' 
    && Math.floor(data.current_observation.temp_f) < 45) {
    background = 'clear-cold';
  }
  if (background === 'sunny'
   && data.forecast.simpleforecast.forecastday[0].date.hour >= 18) {
    background = 'clear-night';
  }
  return background;
};



export default getBackgroundState;

 
 
 
 
 
 
 


