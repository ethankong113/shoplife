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
  pins: PinReducer
});

export default RootReducer;
