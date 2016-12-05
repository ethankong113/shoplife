import React from 'react';
import SessionFormContainer from './session_form_container';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';
import { logout } from '../../actions/session_actions';
import { withRouter } from 'react-router';
import { getCurrentUser } from '../../utils/selectors';
import Modal from '../modal/modal';

class LoginModalContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {openModal: false, formType: "signup"};
    this.toggleModal = this.toggleModal.bind(this);
    this.showProfile = this.showProfile.bind(this);
  }

  toggleModal(formType = null) {
    return e => {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      switch (formType) {
        case "signup":
          this.setState({openModal: true, formType: "signup"});
          break;
        case "login":
          this.setState({openModal: true, formType: "login"});
          break;
        case null:
          this.setState({openModal: false, formType: "signup"});
          break;
        default:
          break;
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
    this.props.router.push(`/profile/${username}`);
  }

   _loggedIn() {
     let currentUser = this.props.currentUser;
     return currentUser;
   }

   render() {
     return (
       <div>
         <div className="header-btn-panel">{this.renderProfileButton()}{this.renderSessionButton()}</div>
         <Modal isOpen={this.state.openModal} modalName="session" closeModal={this.toggleModal(null)}>
           <SessionFormContainer toggleModal={this.toggleModal} formType={this.state.formType}/>
         </Modal>
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
