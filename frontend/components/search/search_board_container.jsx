import { connect } from 'react-redux';
import SearchBoard from './search_board';
import { getCurrentUser, showLoadProducts, hideLoadProducts } from '../../utils/selectors';
import { fetchProductListBySearch, clearProductList, clearProductListMessage } from '../../actions/product_list_actions';

const mapStateToProps = (state) => ({
   currentUser: getCurrentUser(state.session),
   search: (state.search),
   showLoadProducts: showLoadProducts(state.productList),
   hideLoadProducts: hideLoadProducts(state.productList)
 });

 const mapDispatchToProps = (dispatch) => ({
    fetchProductList: (query, limit, offset)=>{dispatch(fetchProductListBySearch(query, limit, offset));},
    clearProductList: ()=>{dispatch(clearProductList());},
    clearProductListMessage: ()=>{dispatch(clearProductListMessage());}
 });

 export default connect(mapStateToProps, mapDispatchToProps)(SearchBoard);
