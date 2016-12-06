import { connect } from 'react-redux';
import ShopBoard from './shop_board';
import { getCurrentUser, getShopList, getProfileId } from '../../utils/selectors';
import { createShop } from '../../actions/shop_actions';
import { fetchShopListByUser, fetchShopListByFollower, clearShopList } from '../../actions/shop_list_actions';

const mapStateToProps = (state) => ({
   shops: getShopList(state.shopList),
   shop: state.shop,
   currentUser: getCurrentUser(state.session)
 });

const mapDispatchToProps = (dispatch) => ({
   createShop: (shop)=>{dispatch(createShop(shop));},
   fetchShopListByUser: (profilename)=>{dispatch(fetchShopListByUser(profilename));},
   fetchShopListByFollower: (profilename)=>{dispatch(fetchShopListByFollower(profilename));},
   clearShopList: ()=>{dispatch(clearShopList());}
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopBoard);
