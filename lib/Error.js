import React from 'react';
import Search from './Search';
import '../styles/Error.scss'

const ErrorPage = (props) => {
  return (
    <div className="error">
        <h2>Weathrly</h2>
        <div className="error-container">
          <p className="error-text">Please Enter a New Location</p>    
          <Search updateWeather={props.updateWeather}/>
        </div>
      </div>
  )
}

export default ErrorPage;