pimport React from 'react';
import '../styles/CurrentWeather.scss';


class CurrentWeather extends React.Component  {
  constructor(props) {
    super(props)
    this.city = this.props.forecast.city;
    this.currentTemp = this.props.forecast.currentTemp;
    this.date = this.props.forecast.currentTime;
    this.high = this.props.forecast.highTemp;
    this.low = this.props.forecast.lowTemp
    this.summary = this.props.forecast.summary;
    this.condition = this.props.forecast.currentCondition;
    this.icon = this.props.forecast.icon;
  }
  render () {
    return (
      <article className="local-weather">
        <h1>{this.city}</h1>
        <h4>{this.currentTemp + '°'}</h4>
        <div>
          <h5>{this.date[0]}</h5>
          <h5>{this.date[1] + ' ' + this.date[2]}</h5>
          <h5>{this.condition}<img src={this.icon}/></h5>
          <p className="temp">{this.high + '°'}/<span className="low">{this.low + '°'}</span></p> 
          <p className="forecast">{this.summary}</p>
        </div>
      </article>
    )
  }
}

export default CurrentWeather;