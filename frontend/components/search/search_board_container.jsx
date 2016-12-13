import { connect } from 'react-redux';
import SearchBoard from './search_board';
import { getCurrentUser } from '../../utils/selectors';
import { fetchProductListBySearch, clearProductList } from '../../actions/product_list_actions';

const mapStateToProps = (state) => ({
   currentUser: getCurrentUser(state.session),
   search: (state.search)
 });

 const mapDispatchToProps = (dispatch) => ({
    fetchProductList: (query, limit, offset)=>{dispatch(fetchProductListBySearch(query, limit, offset));},
    clearProductList: ()=>{dispatch(clearProductList());}
 });

 export default connect(mapStateToProps, mapDispatchToProps)(SearchBoard);
