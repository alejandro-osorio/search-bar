import React from 'react';
import './SearchBar.less';
import gateway from '../../utils/gateway';
import _ from 'underscore';

class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = { searchValue: null, searchResults: null };
    this.onSearchKeyUp = this.onSearchKeyUp.bind(this);
    this.onMakeSearch = this.onMakeSearch.bind(this);
    this.onSearchValueChange = this.onSearchValueChange.bind(this);
    this.onProcessSearchResult = this.onProcessSearchResult.bind(this);
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
    gateway.loadProducts(this.state.searchValue)
      .then((response) =>
        this.onProcessSearchResult(response.data['search@alphateam.search-bar']['_page'])
    );
  }

  onProcessSearchResult(items){
    var results = [];
    _.map(items.itemsReturned, function(item){
      results.push(item);
    })
    this.setState({searchResults: results});
  }

  onSearchValueChange(e){
    this.setState({ searchValue: e.target.value });
  }

  render() {
    var results = this.state.searchResults ? this.state.searchResults : '';
    var searchResult = _.map(results, function(result){
      return (<div>
        {result.name}
      </div>);
    })
    return (
      <div className="searchContainer">
        <h1>SearchBar</h1>
        <div>
          <i className='fa fa-search '/>
          <input type='search' className="searchbar" placeholder="Busque o que quiser!" value={this.state.searchValue} onKeyUp={this.onSearchKeyUp} onChange={this.onSearchValueChange}/>
          <div>{searchResult}</div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
