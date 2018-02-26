import React from 'react';
import '../../styles/MobileMenu.scss';


const MobileMenu = () => {
  return (
    <ul className="mobile-menu">
      <li>Current Weather</li>
      <li>Hourly Forecast</li>
      <li>Daily Forecast</li>
    </ul>
  );
};

export default MobileMenu;