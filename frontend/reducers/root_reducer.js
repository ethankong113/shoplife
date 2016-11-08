import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ProfileReducer from './profile_reducer';
import ShopReducer from './shop_reducer';
import ShopListReducer from './shop_list_reducer';
import ProductReducer from './product_reducer';
import ProductListReducer from './product_list_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  profile: ProfileReducer,
  shop: ShopReducer,
  shopList: ShopListReducer,
  product: ProductReducer,
  productList: ProductListReducer
});

export default RootReducer;
