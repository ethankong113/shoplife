import Shop from './shop';
import { connect } from 'react-redux';
import { readShop, updateShop, deleteShop, clearShop, followShop, unfollowShop } from '../../actions/shop_actions';
import { getShopFollowers, clearFollowers } from '../../actions/follower_actions';
import { fetchProductListByShop } from '../../actions/product_list_actions';
import { getCurrentUser, extractFollowers } from '../../utils/selectors';

const mapStateToProps = (state) => ({
  currentUser: getCurrentUser(state.session),
  shop: state.shop,
  followers: extractFollowers(state.followers)
 });

 const mapDispatchToProps = (dispatch) => ({
    readShop: (id)=>{dispatch(readShop(id));},
    updateShop: (shop)=>{dispatch(updateShop(shop));},
    deleteShop: (id)=>{dispatch(deleteShop(id));},
    clearShop: ()=>{dispatch(clearShop());},
    fetchProductListByShop: (id)=>{dispatch(fetchProductListByShop(id));},
    followShop: (id)=>{dispatch(followShop(id));},
    unfollowShop: (id)=>{dispatch(unfollowShop(id));},
    getShopFollowers: (id)=>{dispatch(getShopFollowers(id));},
    clearFollowers: ()=>{dispatch(clearFollowers());}
 });

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
