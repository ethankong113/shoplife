import React from 'react';
import LoginModal from 'react-modal';
import SessionFormContainer from './session_form_container';
// guide: https://github.com/reactjs/react-modal
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';
import { logout } from '../../actions/session_actions';
import { withRouter } from 'react-router';
import { mediumModal } from '../../utils/modal_style';
import { getCurrentUser } from '../../utils/selectors';

class LoginModalContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {openModal: false, formType: "signup"};
    this.toggleModal = this.toggleModal.bind(this);
    this.renderSessionButton = this.renderSessionButton.bind(this);
    this.showProfile = this.showProfile.bind(this);
  }

  toggleModal(formType = null) {
    return e => {
      if (e) {e.preventDefault();}
      if (formType == "signup") {
        this.setState({openModal: true});
        this.setState({formType: "signup"});
      } else if (formType == "login") {
        this.setState({openModal: true});
        this.setState({formType: "login"});
      } else {
        this.setState({openModal: false});
        this.setState({formType: "signup"});
      }
    };
  }

  renderProfileButton() {
    if (this._loggedIn()) {
      return (
        <button className={"header-btn"} onClick={this.showProfile}>
          Profile
        </button>
      );
    } else {
      return (
        <button onClick={this.toggleModal("signup")} className={"header-btn"}>
          Sign Up
        </button>
      );
    }
  }

  renderSessionButton() {
    if (this._loggedIn()) {
      return (
        <button onClick={this.props.logout} className={"header-btn"}>
          Log Out
        </button>
      );
    } else {
      return (
        <button onClick={this.toggleModal("login")} className={"header-btn"}>
          Log In
        </button>
      );
    }
  }

  showProfile() {
    let username = this.props.currentUser.username;
    this.props.router.push(`/${username}`);
  }

   _loggedIn() {
     let currentUser = this.props.session.currentUser;
     return currentUser;
   }

   render() {
     return (
       <div>
         <div className="header-btn-panel">{this.renderProfileButton()}{this.renderSessionButton()}</div>
         <LoginModal isOpen={this.state.openModal} style={mediumModal()}>
           <button onClick={this.toggleModal(null)} className={"close-form-btn"}>X</button>
           <SessionFormContainer formType={this.state.formType} toggleModal={this.toggleModal}/>
         </LoginModal>
       </div>
     );
   }
 }

 const mapStateToProps = (state) => ({
    session: state.session,
    currentUser: getCurrentUser(state.session)
  });

  const mapDispatchToProps = (dispatch) => ({
     logout: ()=>{dispatch(logout());}
  });

LoginModalContainer = withRouter(LoginModalContainer);
export default connect(mapStateToProps, mapDispatchToProps)(LoginModalContainer);
