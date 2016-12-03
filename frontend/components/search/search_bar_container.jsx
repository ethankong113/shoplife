import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { submitSearch } from '../../actions/search_actions';
import { getCurrentUser } from '../../utils/selectors';

const mapStateToProps = (state) => ({
   state: getCurrentUser(state.session)
 });

const mapDispatchToProps = (dispatch) => ({
   submitSearch: (query)=>{dispatch(submitSearch(query));}
});

export default connect(null, mapDispatchToProps)(SearchBar);
