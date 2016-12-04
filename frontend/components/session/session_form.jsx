import React from 'react';
import { isEmpty } from 'lodash';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {username: "", password: "", firstname: "", lastname: ""};
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
    this.stopPropagation = this.stopPropagation.bind(this);
  }

  componentWillUpdate(nextProps) {
    let currentUser = nextProps.session.currentUser;
    if (currentUser && !isEmpty(currentUser)) {
      nextProps.toggleModal(null)();
    }
  }

  handleSubmit(props) {
    return e => {
      e.preventDefault();
      if (this._isSignup()) {
        props.signup(this.state);
      } else {
        let userInfo = {username: this.state.username, password: this.state.password};
        props.login(userInfo);
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
        <button className="submit-btn guess-login-btn" onClick={this.guestLogin(login)}>Guest Log In</button>
      </div>
    );
  }

  _isSignup() {
    return this.props.formType === "signup" ? true : false;
  }

  guestLogin(login) {
    return e => {
      e.preventDefault();
      this.setState({username: "john123", password: "john123"});
      let userInfo = {username: "john123", password: "john123"};
      login(userInfo);
    };
  }

  render() {
    return (
      <div className="session-modal" onClick={this.stopPropagation}>
        <button onClick={this.props.toggleModal(null)} className={"close-form-btn"}>X</button>
        <form method="POST" onSubmit={this.handleSubmit(this.props)} className={"session-form"}>
          <input type="text" name="username" onChange={this.update("username")} placeholder="Username" value={this.state.username} className={"full-field"} />
          <input type="password" name="pasword" onChange={this.update("password")} placeholder="Password" value={this.state.password} className={"full-field"}/>
          {this.signupWithName()}
          {this.renderButton()}
          <hr className="form-divider"/>
          {this.renderToggleOption(this.props)}
          <hr className="form-divider"/>
          {this.renderGuestLogin(this.props.login)}
        </form>
      </div>
    );
   }
 }

 export default SessionForm;
