import React from 'react';
import './style.less';
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
    // var results = this.state.searchResults ? this.state.searchResults : '';
    // var searchResult = _.map(results, function(result){
    //   return (<div>
    //     {result.name}
    //   </div>);
    // })

    let hasResults = true;

    return (
      <div className="SearchBar" data-is-visible={this.props.visible}>
        <div className="input-container">
          <input type='search' className="search-input" placeholder="Busca" value={this.state.searchValue} onKeyUp={this.onSearchKeyUp} onChange={this.onSearchValueChange}/>
          <button className="close-button" onTouchTap={this.handleTouchTap}></button>
        </div>
        <div className="results-wrapper" data-has-results={hasResults}>
          <ul className="search-results">
            {/*<div className="search-item">{searchResult}</div>*/}
            <li className="search-item">
              <span className="search-item-copy">iPhone 6</span>
            </li>
            <li className="search-item">
              <span className="search-item-copy">iPhone 5s</span>
            </li>
            <li className="search-item">
              <span className="search-item-copy">Samsung Galaxy S4</span>
            </li>
            <li className="search-item-cta">
              <a href="" className="search-item-link">Ver todos</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default SearchBar;
