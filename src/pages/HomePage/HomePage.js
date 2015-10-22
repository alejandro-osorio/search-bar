import React from 'react';
import './HomePage.less';
import HelloWorld from 'components/HelloWorld/HelloWorld';
import SearchBar from 'components/SearchBar/SearchBar';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <HelloWorld />
        <SearchBar />
        <p className="message">Crie, construa, inove!</p>
      </div>
    );
  }
}

export default HomePage;
