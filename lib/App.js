import React from 'react';
import Header from './Header';
import CurrentWeather from './CurrentWeather';
import SevenHour from './SevenHour';
import TenDay from './TenDay';
import data from './Mock-data';
import getCurrentWeather from './current-weather-getter';
import '../styles/App.scss';


const currentWeather = getCurrentWeather(data);


class App extends React.Component {
  render () {
    return (
        <main>
          <section className="main-banner">
            <Header />
            <div className="container">
              <CurrentWeather forecast= {currentWeather}/>
              <SevenHour />
            </div>
          </section>
          <TenDay />
        </main>
      )
  }
}

export default App;