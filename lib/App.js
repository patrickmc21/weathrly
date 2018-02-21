import React from 'react';
import Header from './Header';
import CurrentWeather from './CurrentWeather';
import SevenHour from './SevenHour';
import TenDay from './TenDay';
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
      tenDay: 'tenDay'
    }
  }

  componentDidMount() {
    retrieveWeather('Denver', 'CO')
      .then(response => response.json())
      .then(weatherInfo => {
        this.setState({
          data: weatherInfo, 
          currentWeather: getCurrentWeather(weatherInfo), 
          sevenHour: getSevenHour(weatherInfo), 
          tenDay: getTenDay(weatherInfo)
        })
      })
      .catch(error => console.log({error}))
  }

  render () {
    if (this.state.data) {
      return (
          <main>
            <section className="main-banner">
              <Header />
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
        <main>
          <section className="main-banner">
            <Header />
            <div className="container">
              <h1>Loading</h1>
            </div>
          </section>
        </main>
      )
    }
  }
}

export default App;