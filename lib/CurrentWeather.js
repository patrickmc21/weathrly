import React from 'react';
import '../styles/CurrentWeather.scss';


class CurrentWeather extends React.Component  {
  render () {
    return (
      <article className="local-weather">
        <h1>Denver, CO</h1>
        <h4>56°</h4>
        <div>
          <h5>Saturday</h5>
          <h5>February 18th</h5>
          <p className="temp">66°/<span className="low">23°</span></p> 
          <p className="forecast">Mostly sunny with winds up to 5mph. Lows overnight in the mid to low 20s</p>
        </div>
      </article>
    )
  }
}

export default CurrentWeather;