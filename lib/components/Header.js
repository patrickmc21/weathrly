import React from 'react';
import Search from './Search';
import MobileMenu from './MobileSearch'
import '../../styles/Header.scss';


const Header = (props) => {
  return (
    <header>
      <h2>Weathrly</h2>
      <Search updateWeather={props.updateWeather}/>
      <MobileMenu />
    </header>
  )
}

export default Header;