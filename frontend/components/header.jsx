import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import SearchBarContainer from './search/search_bar_container';
import LoginModalContainer from './session/login_modal_container';
import { clearSearch } from '../actions/search_actions';

// const Header = (props) => {
//   return (<header>
//     <Link to={'/'} className={"header-logo-wrapper"} onClick={props.clearSearch}>
//       <div className={"header-logo"}>shopLife</div>
//     </Link>
//     <SearchBarContainer />
//     <LoginModalContainer />
//   </header>);
// };

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {clearQuery: false};
  }

  handleClick() {
    this.props.clearSearch();
    this.setState({clearQuery: true});
  }

  componentWillUpdate(nextProps, nextState) {
    const {clearQuery} = this.state;
    if (nextState.clearQuery) {
      this.setState({clearQuery: false});
    }
  }

  render() {
    const {clearQuery} = this.state;
    return (
      <header>
        <Link to={'/'} className={"header-logo-wrapper"} onClick={this.handleClick}>
          <div className={"header-logo"}>shopLife</div>
        </Link>
        <SearchBarContainer clearQuery={clearQuery}/>
        <LoginModalContainer />
      </header>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
   clearSearch: ()=>{dispatch(clearSearch());}
});

export default connect(null, mapDispatchToProps)(Header);
