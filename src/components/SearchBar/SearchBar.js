import React from 'react';
import 'SearchBar.less';

class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <h1>My new component SearchBar!</h1>
        <input type='search' className="searchbar" placeholder="Busque o que quiser!" />
      </div>
    );
  }
}

export default SearchBar;
