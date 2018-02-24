import React from 'react';
import Header from './Header';
import CurrentWeather from './CurrentWeather';
import SevenHour from './SevenHour';
import TenDay from './TenDay';
import Welcome from './Welcome';
import ErrorPage from './Error';
import data from './Mock-data';
import retrieveWeather from './api-data';
import getCurrentWeather from './current-weather-getter';
import getTenDay from './ten-day-getter';
import getSevenHour from './seven-hour-getter';
import getBackgroundState from './background-images-selector';
import '../styles/App.scss';


const currentWeather = getCurrentWeather(data);
const tenDay = getTenDay(data);
const sevenHour = getSevenHour(data);
const backgroundImage = getBackgroundState(data);


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      data: null,    
      currentWeather: 'currentWeather',
      sevenHour: 'sevenHour',
      tenDay: 'tenDay',
      location: '',
      background: 'welcome',
      error: false
    }
    this.updateWeather = this.updateWeather.bind(this);
    this.getFromStorage = this.getFromStorage.bind(this);
  }

  componentDidMount() {
    if (localStorage.length   >1) {
      this.getFromStorage();
    }
  }

  updateWeather(location) {
    retrieveWeather(location)
      .then(response => response.json())
      .then(weatherInfo => {
        this.setState({
          data: weatherInfo, 
          currentWeather: getCurrentWeather(weatherInfo), 
          sevenHour: getSevenHour(weatherInfo), 
          tenDay: getTenDay(weatherInfo),
          location: location,
          background: getBackgroundState(weatherInfo),
          error: false
        })
      })
      .catch(error => {this.setState( {error: true} ) })  
    }

  getFromStorage() {
    let retrievedData = localStorage.getItem('location');
    this.updateWeather(retrievedData);
  }

  render () {
    if(this.state.error === false) {
    return (
      <div>
        {this.state.data ? 
            (<main className={this.state.background}>
              <section className="main-banner">
                <Header updateWeather={this.updateWeather}/>
                <div className="container">
                  <CurrentWeather forecast= {this.state.currentWeather}/>
                  <SevenHour array={this.state.sevenHour}/>
                </div>
              </section>
              <TenDay array={this.state.tenDay}/>
            </main>) :     
          (<Welcome updateWeather={this.updateWeather}/>)
      }
      </div>
    )
  }else {
    return (
      <div>
        <ErrorPage updateWeather={this.updateWeather}/>
      </div>
    )
  }
  }
}

export default App;