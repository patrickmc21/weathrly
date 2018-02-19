const getTenDay = (data) => {
  const tenDay = data.forecast.simpleforecast.forecastday.reduce((array, day) => {
  array.push(
      {
        day: day.date.weekday,
        img: day.icon_url,
        high: `${day.high.fahrenheit}°`,
        low: `${day.low.fahrenheit}°`
      }
    )
    return array;
  }, []);
  return tenDay;
}

export default getTenDay;