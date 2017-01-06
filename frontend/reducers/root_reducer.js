import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ProfileReducer from './profile_reducer';
import ShopReducer from './shop_reducer';
import ShopListReducer from './shop_list_reducer';
import TripReducer from './trip_reducer';
import TripListReducer from './trip_list_reducer';
import ProductReducer from './product_reducer';
import ProductListReducer from './product_list_reducer';
import FollowerReducer from './follower_reducer';
import FollowingReducer from './following_reducer';
import PinReducer from './pin_reducer';
import SearchReducer from './search_reducer';
import SideBarReducer from './side_bar_reducer';
import MapReducer from './map_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  profile: ProfileReducer,
  shop: ShopReducer,
  shopList: ShopListReducer,
  trip: TripReducer,
  tripList: TripListReducer,
  product: ProductReducer,
  productList: ProductListReducer,
  followers: FollowerReducer,
  followings: FollowingReducer,
  pins: PinReducer,
  search: SearchReducer,
  sideBar: SideBarReducer,
  markers: MapReducer
});

export default RootReducer;
