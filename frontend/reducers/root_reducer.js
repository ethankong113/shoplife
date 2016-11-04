import { combineReducers } from 'redux';
import SessionReducer from './session_reducer';
import ShopDetailReducer from './shop_detail_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  shopDetail: ShopDetailReducer
});

export default RootReducer;
