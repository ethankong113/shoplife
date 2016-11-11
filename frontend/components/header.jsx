import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import SearchBarContainer from './search/search_bar_container';
import LoginModalContainer from './session/login_modal_container';
import { clearSearch } from '../actions/search_actions';

const Header = (props) => {
  return (<header>
    <Link to={'/'} className={"header-logo-wrapper"} onClick={props.clearSearch}><div className={"header-logo"}>shopLife</div></Link>
    <SearchBarContainer />
    <LoginModalContainer />
  </header>);
};

const mapDispatchToProps = (dispatch) => ({
   clearSearch: ()=>{dispatch(clearSearch());}
});

export default connect(null, mapDispatchToProps)(Header);
