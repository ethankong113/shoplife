import React from 'react';
import { Link } from 'react-router';
import SearchBar from './search/search_bar';
import LoginModalContainer from './session/login_modal_container';

const Header = (props) => {
  return (<header>
    <div className={"header-logo-wrapper"}><Link to={'/'} className={"header-logo"}>shopLife</Link></div>
    <SearchBar />
    <LoginModalContainer />
  </header>);
};

export default Header;
