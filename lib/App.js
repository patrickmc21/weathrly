import React from 'react';
import Header from './Header';
import CurrentWeather from './CurrentWeather';
import SevenHour from './SevenHour';
import TenDay from './TenDay';
import Welcome from './Welcome';
import data from './Mock-data';
import retrieveWeather from './api-data';
import getCurrentWeather from './current-weather-getter';
import getTenDay from './ten-day-getter';
import getSevenHour from './seven-hour-getter';
import '../styles/App.scss';


const currentWeather = getCurrentWeather(data);
const tenDay = getTenDay(data);
const sevenHour = getSevenHour(data);


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      data: null,    
      currentWeather: 'currentWeather',
      sevenHour: 'sevenHour',
      tenDay: 'tenDay',
      location: ''
    }
    // this.getLocationInfo = this.getLocationInfo.bind(this);
    this.updateWeather = this.updateWeather.bind(this);
    // this.getLocationInfo = this.getLocationInfo.bind(this);
  }

  componentDidMount() {
    this.updateWeather(this.state)
  }

  // getLocationInfo(string) {
  //   console.log(string)
  //   let array = string.split(' ');
  //   let a = array.shift();
  //   let b = a.split('')
  //   b.pop();
  //   let c = b.join('');
  //   array.unshift(c)
  //   this.setState({city: array[0], state: array[1]})
  //   this.updateWeather(this.state)
  // }

  updateWeather(obj) {
    retrieveWeather(obj.location)
      .then(response => response.json())
      .then(weatherInfo => {
        this.setState({
          data: weatherInfo, 
          currentWeather: getCurrentWeather(weatherInfo), 
          sevenHour: getSevenHour(weatherInfo), 
          tenDay: getTenDay(weatherInfo),
          city: obj.city,
          state: obj.state
        })
      })
      .catch(error => console.log({error}))

  }

  render () {
    if (this.state.data) {
      return (
          <main>
            <section className="main-banner">
              <Header updateWeather={this.updateWeather}/>
              <div className="container">
                <CurrentWeather forecast= {this.state.currentWeather}/>
                <SevenHour array={this.state.sevenHour}/>
              </div>
            </section>
            <TenDay array={this.state.tenDay}/>
          </main>
        )
    }else {
      return (
        <Welcome updateWeather={this.updateWeather}/>
      )
    }
  }
}

export default App;