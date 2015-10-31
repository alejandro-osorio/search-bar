import React from 'react';
import './style.less';
import SearchBar from '../SearchBar';
import { Link } from 'react-router';
import hamburgerIcon from 'assets/icons/hamburger_icon.svg';
import SVGIcon from 'utils/SVGIcon';
import searchIcon from 'assets/icons/search.svg';
import cartIcon from 'assets/icons/cart.svg';

class Header extends React.Component {

  state = {
    searchToggle: false
  }

  searchTap = () => {
    this.setState({ searchToggle: !this.state.searchToggle });
  }

  render() {

    return (
    <div>
      <div className="Header row-fluid">
        <div className="header-container" data-is-searched={!this.state.searchToggle}>
          <div className="col-xs-1">
            <SVGIcon className="icon" svg={hamburgerIcon} width={18} height={18} fill="#153243"/>
          </div>

          <h1 className="brand col-xs-8 col-xs-push-1">
            <Link to="home">Fera fashion</Link>
          </h1>

          <div className="col-xs-1" onTouchTap={this.searchTap}>
            <SVGIcon className="icon" svg={searchIcon} width={15} height={18} fill="#153243"/>
          </div>

          <div className="col-xs-1">
            <SVGIcon className="icon" svg={cartIcon} width={18} height={18} fill="#153243"/>
          </div>
        </div>
      </div>
      <div className="search-container">
        <SearchBar visible={this.state.searchToggle}/>
      </div>
    </div>
    );
  }
}

export default Header;
