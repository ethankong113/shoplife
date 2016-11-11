import { connect } from 'react-redux';
import SearchBoard from './search_board';
import { getCurrentUser } from '../../utils/selectors';
import { fetchProductListBySearch } from '../../actions/product_list_actions';

const mapStateToProps = (state) => ({
   currentUser: getCurrentUser(state.session),
   search: (state.search)
 });

 const mapDispatchToProps = (dispatch) => ({
    fetchProductList: (query)=>{dispatch(fetchProductListBySearch(query));}
 });

 export default connect(mapStateToProps, mapDispatchToProps)(SearchBoard);
