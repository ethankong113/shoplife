import { connect } from 'react-redux';
import ProductTable from './product_table';
import { getCurrentUser, getProductList, emptyProductList } from '../../utils/selectors';
import { fetchProductListByTrip, clearProductList } from '../../actions/product_list_actions';
import { unpinItemFromTable } from '../../actions/pin_actions';

const mapStateToProps = (state) => ({
   currentUser: getCurrentUser(state.session),
   trip: state.trip,
   products: getProductList(state.productList),
   emptyProductList: emptyProductList(state.productList)
 });

 const mapDispatchToProps = (dispatch) => ({
    fetchProductListByTrip: (id)=>{dispatch(fetchProductListByTrip(id));},
    clearProductList: ()=>{dispatch(clearProductList());},
    unpinItemFromTable: (tripId, productId) => {dispatch(unpinItemFromTable(tripId, productId));}
 });

export default connect(mapStateToProps, mapDispatchToProps)(ProductTable);
