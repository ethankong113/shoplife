import ShopDetail from './shop_detail';
import { connect } from 'react-redux';
import { readShop, updateShop, deleteShop, clearShop } from '../../actions/shop_actions';
import { fetchProductListByShop } from '../../actions/product_list_actions';
import { getCurrentUser } from '../../utils/selectors';

const mapStateToProps = (state) => ({
  currentUser: getCurrentUser(state.session),
  shopDetail: state.shopDetail
 });

 const mapDispatchToProps = (dispatch) => ({
    readShop: (id)=>{dispatch(readShop(id));},
    updateShop: (shop)=>{dispatch(updateShop(shop));},
    deleteShop: (id)=>{dispatch(deleteShop(id));},
    clearShop: ()=>{dispatch(clearShop());},
    fetchProductListByShop: (id)=>{dispatch(fetchProductListByShop(id));}
 });

export default connect(mapStateToProps, mapDispatchToProps)(ShopDetail);
