const getSevenHour = (data) => {
  const sevenHourSlice = data.hourly_forecast.slice(0, 7);
  let sevenHourForecast;
  
  sevenHourForecast = sevenHourSlice.reduce((sevenHourArray, hour) => {
    sevenHourArray.push(
      {
        hour: hour.FCTTIME.civil,
        logo: hour.icon_url,
        temp: `${hour.temp.english}°`,
        condition: hour.condition,
        wind: `${hour.wspd.english}mph ${hour.wdir.dir}`
      }
    );
    return sevenHourArray;
  }, []);
  return sevenHourForecast;
};

export default getSevenHour;