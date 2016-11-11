import { connect } from 'react-redux';
import SearchBar from './search_bar';
import { submitSearch } from '../../actions/search_actions';


const mapDispatchToProps = (dispatch) => ({
   submitSearch: (query)=>{dispatch(submitSearch(query));}
});

export default connect(null, mapDispatchToProps)(SearchBar);
