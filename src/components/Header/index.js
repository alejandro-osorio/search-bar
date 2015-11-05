import React from 'react';
import './style.less';
import SearchBar from '../SearchBar';
import { Link } from 'react-router';
import SVGIcon from 'utils/SVGIcon';
import hamburgerIcon from 'assets/icons/hamburger_icon.svg';
import cartIcon from 'assets/icons/cart.svg';
import searchIcon from 'assets/icons/search.svg';

class Header extends React.Component {

  state = {
    searchToggle: false
  }

  searchTap = () => {
    this.setState({ searchToggle: !this.state.searchToggle });
  }

  render() {

    return (
    <div className="Header row-fluid">
      <div className="Header-container" data-is-searched={this.state.searchToggle}>
        <SearchBar visible={this.state.searchToggle} searchTap={this.searchTap} />
        <div className="Header-content" data-is-searched={this.state.searchToggle}>
          <div className="col-xs-1">
            <SVGIcon className="Header-icon" svg={hamburgerIcon} width={18} height={18} fill="#153243"/>
          </div>

          <h1 className="Header-brand col-xs-8 col-xs-push-1">
            <Link to="home">Fera fashion</Link>
          </h1>

          <div className="col-xs-1" onTouchTap={this.searchTap}>
            <SVGIcon className="Header-icon" svg={searchIcon} width={15} height={18} fill="#153243"/>
          </div>

          <div className="col-xs-1">
            <SVGIcon className="Header-icon" svg={cartIcon} width={18} height={18} fill="#153243"/>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Header;
