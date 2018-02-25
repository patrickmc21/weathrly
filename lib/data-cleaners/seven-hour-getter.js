const getSevenHour = (data) => {
  const sevenHour = data.hourly_forecast.slice(0,7).reduce((array, hour) => {
  array.push(
    {
      hour: hour.FCTTIME.civil,
      logo: hour.icon_url,
      temp: `${hour.temp.english}°`,
      condition: hour.condition,
      wind: `${hour.wspd.english}mph ${hour.wdir.dir}`
    }
    )
    return array;
  }, [])

 return sevenHour
}

export default getSevenHour;