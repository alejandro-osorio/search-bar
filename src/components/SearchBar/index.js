import React from 'react';
import './style.less';
import './SearchResults/style.less';
import gateway from '../../utils/gateway';
import _ from 'underscore';
// import SVGIcon from 'utils/SVGIcon';
// import closeIcon from 'assets/icons/close_icon.svg';
// import closeImg from 'assets/icons/close_icon.png';

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

  state = {
    searchInput: this.props.visible
  }

  handleTouchTap = () => {
    this.props.searchTap();
  }

  render() {
    var results = this.state.searchResults ? this.state.searchResults : '';
    var searchResult = _.map(results, function(result){
      return (
        <li className="SearchResults-item">
         <span className="search-item-copy">{result.name}</span>
       </li>
      );
    })

    let mockResults = (
      <li className="SearchResults-item">
       <span className="search-item-copy">iPhone 6</span>
     </li>
    );

    let hasResults = true;

    return (
      <div className="SearchBar" data-is-visible={this.props.visible}>
        <div className="SearchBar-inner">
          <input type='search' className="search-input" placeholder="Busca" value={this.state.searchValue} onKeyUp={this.onSearchKeyUp} onChange={this.onSearchValueChange}/>
          <button className="SearchBar-close-button" onTouchTap={this.handleTouchTap}></button>
        </div>
        <ul className="SearchResults" data-has-results={hasResults}>
          {searchResult}
          {mockResults}
          {mockResults}
          {mockResults}
          {mockResults}
          {mockResults}
          <li className="SearchResults-item-cta" data-has-cta={hasResults}>
            <a href="" className="SearchResults-item-link">Ver todos</a>
          </li>
        </ul>
      </div>
    );
  }
}

export default SearchBar;
