import React from 'react';
import { connect } from 'react-redux';
import UserProfile from './profile';
import { getCurrentUser, getProfileDetail } from '../../utils/selectors';
import { readProfile, clearProfile, followUser, unfollowUser } from '../../actions/profile_actions';
import { clearFollowers } from '../../actions/follower_actions';

const mapStateToProps = (state) => ({
   session: state.session,
   currentUser: getCurrentUser(state.session),
   profile: getProfileDetail(state.profile)
 });

 const mapDispatchToProps = (dispatch) => ({
    readProfile: (username)=>{dispatch(readProfile(username));},
    clearProfile: ()=>{dispatch(clearProfile());},
    followUser: (id)=>{dispatch(followUser(id));},
    unfollowUser: (id)=>{dispatch(unfollowUser(id));},
    clearFollowers: ()=>{dispatch(clearFollowers());}
 });

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
