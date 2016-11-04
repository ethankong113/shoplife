import React from 'react';
import { connect } from 'react-redux';
import UserProfile from './profile';
import { getCurrentUser } from '../../utils/selectors';

const mapStateToProps = (state) => ({
   session: state.session,
   currentUser: getCurrentUser(state.session)
 });

export default connect(mapStateToProps)(UserProfile);
