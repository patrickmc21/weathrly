import React from 'react';
import Header from './Header';
import CurrentWeather from './CurrentWeather';
import SevenHour from './SevenHour';
import TenDay from './TenDay';
import '../styles/App.scss';


class App extends React.Component {
  render () {
    return (
        <main>
          <section className="main-banner">
            <Header />
            <div className="container">
              <CurrentWeather />
              <SevenHour />
            </div>
          </section>
          <TenDay />
        </main>
      )
  }
}

export default App;