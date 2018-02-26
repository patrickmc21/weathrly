import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/CurrentWeather.scss';


const CurrentWeather = (props) =>  {
  return (
    <article className="local-weather">
      <h1>{props.forecast.city}</h1>
      <div className="local-weather-div">
        <div className="local-weather-temp">
          <h4>{props.forecast.currentTemp + '°'}</h4>
        </div>
        <div className="local-weather-div-two">
          <h5>{props.forecast.currentTime[0]}</h5>
          <h5>{props.forecast.currentTime[1] +
           ' ' + props.forecast.currentTime[2]}</h5>
          <h5>{props.forecast.currentCondition}
            <img src={props.forecast.icon}/>  
          </h5>
          <p className="temp">{props.forecast.highTemp + '°'}/
          <span className="low">{props.forecast.lowTemp + '°'}</span>
          </p> 
          <p className="forecast">{props.forecast.summary}</p>
        </div>  
      </div>
    </article>
  );
};

CurrentWeather.propTypes = {
  forecast: PropTypes.object
};



export default CurrentWeather;