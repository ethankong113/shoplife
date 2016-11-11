import React from 'react';
import { Link } from 'react-router';
import SearchBar from './search/search_bar';
import LoginModalContainer from './session/login_modal_container';

const Header = (props) => {
  return (<header>
    <Link to={'/'} className={"header-logo-wrapper"}><div className={"header-logo"}>shopLife</div></Link>
    <SearchBar />
    <LoginModalContainer />
  </header>);
};

export default Header;
