import React from 'react';
import LoginModal from 'react-modal';
import SessionFormContainer from './session_form_container';
// guide: https://github.com/reactjs/react-modal
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';
import { logout } from '../../actions/session_actions';
import { withRouter } from 'react-router';
import { mediumModal } from '../../utils/modal_style';

class LoginModalContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {openModal: false, formType: "signup"};
    this.toggleModal = this.toggleModal.bind(this);
    this.renderSessionButton = this.renderSessionButton.bind(this);
    this.routeToProfile = this.routeToProfile.bind(this);
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
    let currentUser = this.props.session.currentUser;
    if (this._loggedIn(currentUser)) {
      return (
        <button className={"header-btn"} onClick={this.routeToProfile}>
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
    let currentUser = this.props.session.currentUser;
    if (this._loggedIn(currentUser)) {
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

  routeToProfile() {
    this.props.router.push("/profile");
  }

   _loggedIn(user) {
     return user && !isEmpty(user);
   }

   _modalStyle() {
     return {
       overlay: {
         backgroundColor: 'rgba(0,0,0,0.75)'
       },
       content: {
         width: "360px",
         top: "100px",
         bottom: "100px",
         left: "0px",
         right: "0px",
         overflow: "hidden",
         borderRadius: "10px",
         padding: "50px",
         marginLeft: "auto",
         marginRight: "auto"
       }
     };
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
    session: state.session
  });

  const mapDispatchToProps = (dispatch) => ({
     logout: ()=>{dispatch(logout());}
  });

LoginModalContainer = withRouter(LoginModalContainer);
export default connect(mapStateToProps, mapDispatchToProps)(LoginModalContainer);
