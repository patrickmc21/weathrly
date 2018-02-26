const getTenDay = (data) => {
  let tenDay = data.forecast.simpleforecast.forecastday;
  let tenDayForecast;

  tenDayForecast = tenDay.reduce((tenDayArray, day) => {
    tenDayArray.push(
      {
        day: day.date.weekday,
        img: day.icon_url,
        high: `${day.high.fahrenheit}°`,
        low: `${day.low.fahrenheit}°`
      }
    );
    return tenDayArray;
  }, []);
  return tenDayForecast;
};

export default getTenDay;