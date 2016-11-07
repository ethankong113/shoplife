import React from 'react';
import { connect } from 'react-redux';
import UserProfile from './profile';
import { getCurrentUser } from '../../utils/selectors';
import { readProfile } from '../../actions/profile_actions';

const mapStateToProps = (state) => ({
   session: state.session,
   currentUser: getCurrentUser(state.session),
   profile: state.profile
 });

 const mapDispatchToProps = (dispatch) => ({
    readProfile: (username)=>{dispatch(readProfile(username));}
 });

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
