import React from 'react';
import Search from './Search';
import '../styles/Welcom.scss'

const ErrorPage = (props) => {
  return (
    <div className="welcome">
        <h2>Weathrly</h2>
        <div className="welcome-container">
          <img src="../images/404.png"/>
          <p>404 ERROR</p>
          <p>Page Not Found</p>
          <p>Please Enter a New Location</p>    
          <Search updateWeather={props.updateWeather}/>
        </div>
      </div>
  )
}

export default ErrorPage;