
const getCurrentWeather = (data) => {
  let currentWeather = {};
  let daysOfWeek = [
    'Saturday', 
    'Sunday', 
    'Monday', 
    'Tuesday', 
    'Wednesday', 
    'Thursday', 
    'Friday'];
  let months = [
    'January', 
    'February', 
    'March', 
    'April', 
    'May', 
    'June', 
    'July', 
    'August', 
    'September', 
    'October', 
    'November', 
    'December'];
  let dateOfMonth = ['1st', '2nd', '3rd', '21st', '22nd', '23rd', '31st'];
  const getDate = () => {

    let currentDay = data.current_observation.local_time_rfc822;
    let results = [];
    let array = currentDay.split(' ');
    let day = array.shift();
    let removeCommaFromDay = day.split('');

    removeCommaFromDay.pop();
    let rejoinedDay = removeCommaFromDay.join('');
    let date;

    array.unshift(rejoinedDay);
    results.push(daysOfWeek.find(day => day.includes(array[0])));
    results.push(months.find(month => month.includes(array[2])));
    date = dateOfMonth.find(date => date.includes(array[1])) ? 
      dateOfMonth.find(date => date.includes(array[1])) : array[1] + 'th';
    results.push(date);
    return results;
  };

  currentWeather.city = data.current_observation.display_location.full;
  currentWeather.currentCondition = data.current_observation.weather;
  currentWeather.currentTime = getDate();
  currentWeather.currentTemp = Math.floor(data.current_observation.temp_f);
  let highLowPath = data.forecast.simpleforecast.forecastday[0];

  currentWeather.highTemp = highLowPath.high.fahrenheit;
  currentWeather.lowTemp = highLowPath.low.fahrenheit;
  currentWeather.summary = data.forecast.txt_forecast.forecastday[0].fcttext;
  currentWeather.icon = data.forecast.txt_forecast.forecastday[0].icon_url;
  return currentWeather;
};

export default getCurrentWeather;