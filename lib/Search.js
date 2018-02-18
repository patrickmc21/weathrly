import React from 'react';
import '../styles/Search.scss';


class Search extends React.Component  {
  render () {
    return (
      <form>
        <input type="text" name="search" placeholder="Enter City" id="search" />
        <input type="submit" name="submit-search" placeholder="Search" className='submit-search' />
      </form>
    )
  }
}

export default Search;