import React from 'react';
import Search from './Search';
import '../styles/Header.scss';


class Header extends React.Component {
  render () {
    return (
      <header>
        <h2>Weathrly</h2>
        <Search />
      </header>
    )
  }
}

export default Header;