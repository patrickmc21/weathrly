import React from 'react';
import Header from './Header';
import CurrentWeather from './CurrentWeather';
import SevenHour from './SevenHour';
import TenDay from './TenDay';
import Welcome from './Welcome';
import ErrorPage from './Error';
import data from '../data/Mock-data';
import retrieveWeather from '../data/api-data';
import getCurrentWeather from '../data-cleaners/current-weather-getter';
import getTenDay from '../data-cleaners/ten-day-getter';
import getSevenHour from '../data-cleaners/seven-hour-getter';
import getBackgroundState from '../data-cleaners/background-images-selector';
import '../../styles/App.scss';


const currentWeather = getCurrentWeather(data);
const tenDay = getTenDay(data);
const sevenHour = getSevenHour(data);
const backgroundImage = getBackgroundState(data);


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      data: null,    
      currentWeather: '',
      sevenHour: '',
      tenDay: '',
      location: '',
      background: '',
      error: false
    }
    this.updateWeather = this.updateWeather.bind(this);
    this.getFromStorage = this.getFromStorage.bind(this);
    this.sendLocationToStorage = this.sendLocationToStorage.bind(this);
  }

  componentDidMount() {
    if (localStorage.length > 1) {
      this.getFromStorage();
    }
  }

  updateWeather(location) {
    retrieveWeather(location)
      .then(response => response.json())
      .then(weatherInfo => {
        if(weatherInfo.forecast) {
          this.sendLocationToStorage(location)
          this.setState({
            data: weatherInfo, 
            currentWeather: getCurrentWeather(weatherInfo), 
            sevenHour: getSevenHour(weatherInfo), 
            tenDay: getTenDay(weatherInfo),
            location: location,
            background: getBackgroundState(weatherInfo),
            error: false
          })
        } else {
          this.setState({error: true})
        }
      })
      .catch(error => {this.setState( {error: true} ) })  
  }

  sendLocationToStorage(location) {
    localStorage.setItem('location', location);
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