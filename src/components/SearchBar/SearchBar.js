import React from 'react';
import './SearchBar.less';
import gateway from '../../utils/gateway';

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = { searchValue: null };
    this.onSearchKeyUp = this.onSearchKeyUp.bind(this);
    this.onMakeSearch = this.onMakeSearch.bind(this);
    this.onSearchValueChange = this.onSearchValueChange.bind(this);
  }
  onSearchKeyUp(){
    if (this.timeout) {
      clearTimeout(this.timeout);
      this.timeout = null;
    }
    this.timeout = setTimeout((function(){ this.onMakeSearch(); }).bind(this),1000);
  }

  onMakeSearch(){
    this.timeout = null;
    var autocomplete = gateway.loadProducts(this.state.searchValue);
    console.log(autocomplete);
  }

  onSearchValueChange(e){
    this.setState({ searchValue: e.target.value });
  }

  render() {
    return (
      <div>
        <h1>SearchBar</h1>
        <input type='search' className="searchbar" placeholder="Busque o que quiser!" value={this.state.searchValue} onKeyUp={this.onSearchKeyUp} onChange={this.onSearchValueChange}/>
      </div>
    );
  }
}

export default SearchBar;
