import React from 'react';
import './HomePage.less';
import SearchBar from 'components/SearchBar/SearchBar';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

export default HomePage;
