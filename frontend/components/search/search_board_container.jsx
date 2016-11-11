import { connect } from 'react-redux';
import SearchBoard from './search_board';
import { getCurrentUser } from '../../utils/selectors';

const mapStateToProps = (state) => ({
   currentUser: getCurrentUser(state.session)
 });

 export default connect(mapStateToProps)(SearchBoard);
