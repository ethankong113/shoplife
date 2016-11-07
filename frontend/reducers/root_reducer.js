import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ShopDetailReducer from './shop_detail_reducer';
import ProfileReducer from './profile_reducer';
import ProductReducer from './product_reducer';
import ProductListReducer from './product_list_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  shopDetail: ShopDetailReducer,
  profile: ProfileReducer,
  product: ProductReducer,
  productList: ProductListReducer
});

export default RootReducer;
