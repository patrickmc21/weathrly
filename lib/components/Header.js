import React from 'react';
import Search from './Search';
<<<<<<< HEAD
import PropTypes from 'prop-types';
=======
>>>>>>> master
import '../../styles/Header.scss';


const Header = (props) => {
  return (
    <header>
      <h2>Weathrly</h2>
      <Search updateWeather={props.updateWeather}/>
    </header>
  );
};

Header.propTypes = {
  updateWeather: PropTypes.func
};

export default Header;