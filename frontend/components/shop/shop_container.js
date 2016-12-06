import Shop from './shop';
import { connect } from 'react-redux';
import { readShop, updateShop, deleteShop, clearShop, followShop, unfollowShop } from '../../actions/shop_actions';
import { fetchProductListByShop } from '../../actions/product_list_actions';
import { getCurrentUser } from '../../utils/selectors';

const mapStateToProps = (state) => ({
  currentUser: getCurrentUser(state.session),
  shop: state.shop
 });

 const mapDispatchToProps = (dispatch) => ({
    readShop: (id)=>{dispatch(readShop(id));},
    updateShop: (shop)=>{dispatch(updateShop(shop));},
    deleteShop: (id)=>{dispatch(deleteShop(id));},
    clearShop: ()=>{dispatch(clearShop());},
    fetchProductListByShop: (id)=>{dispatch(fetchProductListByShop(id));},
    followShop: (id)=>{dispatch(followShop(id));},
    unfollowShop: (id)=>{dispatch(unfollowShop(id));}
 });

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
