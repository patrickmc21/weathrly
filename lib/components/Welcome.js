import React from 'react';
import Search from './Search'
import '../../styles/Welcom.scss';


class Welcome extends React.Component  {
  constructor(props) {
    super(props)
    this.state = {
      time: new Date().getHours()
    }
  }
  render () {
    return (
      <div className="welcome">
        <h2>Weathrly</h2>
        <div className="welcome-container">
          {
            this.state.time < 12 && <p className="greeting">Good Morning</p>
          }
          {
            this.state.time >= 12 && this.state.time < 18 &&<p className="greeting">Good Afternoon</p>
          }
          {
            this.state.time >= 18 && <p className="greeting">Good Evening</p>
          }          
          <Search updateWeather={this.props.updateWeather}/>
        </div>
      </div>
    )
  }
}

export default Welcome;