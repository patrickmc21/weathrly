import React from 'react';
import Search from './Search';
import '../../styles/Error.scss'

const ErrorPage = (props) => {
  return (
    <div className="error">
      <h2 className="error-title">Weathrly</h2>
      <div className="error-container">
        <p className="error-text">Please Enter a New Location</p>    
        <Search updateWeather={props.updateWeather}/>
        <img src="../sample-layout/404.png" />
      </div>
    </div>
  )
}

export default ErrorPage;