const getCurrentWeather = (data) => {
  let currentWeather = {};
  let daysOfWeek = ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let dateOfMonth = ['1st', '2nd', '3rd', '21st', '22nd', '23rd', '31st'];
  currentWeather.city = data.current_observation.display_location.full;
  currentWeather.currentCondition = data.current_observation.weather;
  const getDate = () => {
    let currentDay = data.current_observation.local_time_rfc822;
    let results = [];
    let array = currentDay.split(' ');
    let a = array.shift();
    let b = a.split('')
    b.pop();
    let c = b.join('');
    array.unshift(c)
    results.push(daysOfWeek.find(day => day.includes(array[0])))
    results.push(months.find(month => month.includes(array[2])))
    let date = dateOfMonth.find(date => date.includes(array[1])) ? dateOfMonth.find(date => date.includes(array[1])) : array[1] + 'th';
    results.push(date)
    return results;
  }
  currentWeather.currentTime = getDate();
  currentWeather.currentTemp = data.current_observation.temp_f;
  currentWeather.highTemp = data.forecast.simpleforecast.forecastday[0].high.fahrenheit;
  currentWeather.lowTemp = data.forecast.simpleforecast.forecastday[0].low.fahrenheit;
  currentWeather.summary = data.forecast.txt_forecast.forecastday[0].fcttext;
  currentWeather.icon = data.forecast.txt_forecast.forecastday[0].icon_url;
  return currentWeather;
}

export default getCurrentWeather;