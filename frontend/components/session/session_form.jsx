import React from 'react';
import { isEmpty } from 'lodash';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {username: "", password: "", firstname: "", lastname: "", clickCount: 0};
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
    this.stopPropagation = this.stopPropagation.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.removeWarning = this.removeWarning.bind(this);
    this.displayWarning = this.displayWarning.bind(this);
  }

  componentWillUpdate(nextProps) {
    let newSession = nextProps.session.currentUser;
    let currentUser = this.props.session.currentUser;
    if (currentUser === null && newSession && !isEmpty(newSession)) {
      nextProps.toggleModal(null)();
      this.setState({username: "", password: "", firstname: "", lastname: "", clickCount: 0});
    } else if (currentUser && newSession === null) {
      nextProps.toggleModal('login')();
    }
  }

  handleSubmit(props) {
    return e => {
      const {username, password, firstname, lastname} = this.state;
      e.preventDefault();
      this.validateForm("username")();
      this.validateForm("password")();
      if (username.length >= 1 || password.length >= 6) {
        if (this._isSignup()) {
          let newUser = {username, password, firstname, lastname};
          props.signup(newUser);
        } else {
          let userInfo = {username , password};
          props.login(userInfo);
        }
      }
    };
  }

  update(field) {
    return e => {
      this.setState({[field]: e.target.value});
    };
  }

  stopPropagation(e) {
    e.stopPropagation();
  }

  signupWithName() {
    if (this._isSignup()) {
      const {firstname, lastname} = this.state;
      return (
        <div>
          <input type="text" name="firstname" onChange={this.update("firstname")} placeholder="First Name" value={firstname} className={"half-field"}/>
          <input type="text" name="lastname" onChange={this.update("lastname")} placeholder="Last Name" value={lastname} className={"half-field"}/>
        </div>
      );
    }
    return (
      <div></div>
    );
  }

  renderButton() {
    if (this._isSignup()) {
      return (
        <button className={"submit-btn"}>Sign Up</button>
      );
    }
    return (
      <button className={"submit-btn"}>Log In</button>
    );
  }

  renderToggleOption(props) {
    const { toggleModal } = props;
    if (this._isSignup()) {
      return (
        <div className={"session-toggle-panel"}>
          <p>Do you already have an account?</p>
          <button className={"session-toggle-btn"} onClick={toggleModal("login")}>Log In</button>
        </div>
      );
    } else {
      return (
        <div className={"session-toggle-panel"}>
          <p>Don't have an account yet?</p>
          <button className={"session-toggle-btn"} onClick={toggleModal("signup")}>Sign Up</button>
        </div>
      );
    }
  }

  renderGuestLogin(login) {
    return(
      <div>
        <button className="submit-btn" onClick={this.guestLogin(login)}>Guest Log In</button>
      </div>
    );
  }

  renderCloseButton() {
    const {clickCount} = this.state;
    const buttonText = ["Or Browse without an Account", "But some features will be blocked :(", "If you insist, click me again to close"]
    return (
      <div>
        <button className="submit-btn guess-login-btn" onClick={this.handleClose}>{buttonText[clickCount]}</button>
      </div>
    );
  }

  handleClose(e) {
    const {clickCount} = this.state;
    e.preventDefault();
    if (clickCount < 2) {
      this.setState({clickCount: clickCount + 1});
    } else {
      this.props.toggleModal(null)();
      this.setState({clickCount: 0});
    }
  }

  _isSignup() {
    return this.props.formType === "signup" ? true : false;
  }

  guestLogin(login) {
    return e => {
      e.preventDefault();
      let userInfo = {username: "john123", password: "john123"};
      this.setState(userInfo);
      login(userInfo);
    };
  }

  validateForm(field) {
    return e => {
      const {username, password} = this.state;
      if (field === "username") {
        if (username.length < 1) {
          $($('.session-form')[0][field]).removeClass('full-field').addClass('full-field-bad');
          $(`.warning-${field}`).css('visibility', 'visible');
        } else {
          $(`.warning-${field}`).css('visibility', 'hidden');
        }
      } else if (field === "password") {
        if (password.length < 6) {
          $($('.session-form')[0][field]).removeClass('full-field').addClass('full-field-bad');
          $(`.warning-${field}`).css('visibility', 'visible');
        } else {
          $(`.warning-${field}`).css('visibility', 'hidden');
        }
      }
    };
  }

  displayWarning(field) {
    if (field === "username") {
      const warning = "Username cannot be empty";
      return <span className="warning-username warning-text">{warning}</span>
    } else if (field === "password") {
      const warning = "Password must be at least 6 digits long";
      return <span className="warning-password warning-text">{warning}</span>
    }
  }

  removeWarning(field) {
    return e => {
      const isBad = $($('.session-form')[0][field]).hasClass("full-field-bad");
      if (isBad) {
        $($('.session-form')[0][field]).removeClass('full-field-bad').addClass('full-field');
      }
    };
  }

  //unblock the below line and move it back to render if we want a close button for users.
  //<button onClick={this.props.toggleModal(null)} className={"close-form-btn"}>X</button>

  render() {
    const {username, password} = this.state;
    return (
      <div className="session-modal" onClick={this.stopPropagation}>
        <form method="POST" onSubmit={this.handleSubmit(this.props)} className={"session-form"}>
          <input type="text" name="username"
            onChange={this.update("username")} placeholder="Username"
            value={username} className={"full-field"}
            onBlur={this.validateForm("username")} onFocus={this.removeWarning("username")}/>
          {this.displayWarning("username")}
          <input type="password" name="password"
            onChange={this.update("password")} placeholder="Password"
            value={password} className={"full-field"}
            onBlur={this.validateForm("password")} onFocus={this.removeWarning("password")}/>
          {this.displayWarning("password")}
          {this.signupWithName()}
          {this.renderButton()}
          <hr className="form-divider"/>
          {this.renderToggleOption(this.props)}
          <hr className="form-divider"/>
          {this.renderGuestLogin(this.props.login)}
          {this.renderCloseButton()}
        </form>
      </div>
    );
   }
 }

 export default SessionForm;
