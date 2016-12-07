import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup, login } from '../../actions/session_actions';

const mapStateToProps = (state) => ({
   session: state.session
 });

 const mapDispatchToProps = (dispatch) => ({
    signup: (user)=>{dispatch(signup(user));},
    login: (user)=>{dispatch(login(user));}
 });

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
