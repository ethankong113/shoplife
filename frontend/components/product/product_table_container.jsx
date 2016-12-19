import { connect } from 'react-redux';
import ProductTable from './product_table';
import { getCurrentUser, getProductList, emptyProductList } from '../../utils/selectors';
import { fetchProductListByTrip, clearProductList } from '../../actions/product_list_actions';

const mapStateToProps = (state) => ({
   currentUser: getCurrentUser(state.session),
   trip: state.trip,
   products: getProductList(state.productList),
   emptyProductList: emptyProductList(state.productList)
 });

 const mapDispatchToProps = (dispatch) => ({
    fetchProductListByTrip: (id)=>{dispatch(fetchProductListByTrip(id));},
    clearProductList: ()=>{dispatch(clearProductList());}
 });

export default connect(mapStateToProps, mapDispatchToProps)(ProductTable);
