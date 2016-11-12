import FollowingUser from './following_user';
import { connect } from 'react-redux';
import { getCurrentUser, getFollowees } from '../../utils/selectors';
import { fetchFollowees } from '../../actions/following_actions';

const mapStateToProps = (state) => ({
   followees: getFollowees(state.followings),
   currentUser: getCurrentUser(state.session),
   profile: state.profile
 });

const mapDispatchToProps = (dispatch) => ({
    fetchFollowees: (username)=>{dispatch(fetchFollowees(username));}
});

 export default connect(mapStateToProps, mapDispatchToProps)(FollowingUser);
