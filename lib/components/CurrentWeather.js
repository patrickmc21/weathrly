import React from 'react';
import '../../styles/CurrentWeather.scss';


const CurrentWeather = (props) =>  {
  return (
    <article className="local-weather">
      <h1>{props.forecast.city}</h1>
      <h4>{props.forecast.currentTemp + '°'}</h4>
      <div>
        <h5>{props.forecast.currentTime[0]}</h5>
        <h5>{props.forecast.currentTime[1] + ' ' + props.forecast.currentTime[2]}</h5>
        <h5>{props.forecast.currentCondition}<img src={props.forecast.icon}/></h5>
        <p className="temp">{props.forecast.highTemp + '°'}/<span className="low">{props.forecast.lowTemp + '°'}</span></p> 
        <p className="forecast">{props.forecast.summary}</p>
      </div>
    </article>
  )
}



export default CurrentWeather;