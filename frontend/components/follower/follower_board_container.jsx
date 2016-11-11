import { connect } from 'react-redux';
import FollowerBoard from './follower_board';
import { getCurrentUser, selectFollowers } from '../../utils/selectors';
import { getFollowers, clearFollowers } from '../../actions/follower_actions';

const mapStateToProps = (state) => ({
   currentUser: getCurrentUser(state.session),
   profile: state.profile,
   followers: selectFollowers(state.followers)
 });

const mapDispatchToProps = (dispatch) => ({
   getFollowers: (id)=>{dispatch(getFollowers(id));},
   clearFollowers: ()=>{dispatch(clearFollowers());}
});

export default connect(mapStateToProps, mapDispatchToProps)(FollowerBoard);
