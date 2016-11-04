import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import ShopDetailMiddleware from './shop_detail_middleware';

export default applyMiddleware(SessionMiddleware, ShopDetailMiddleware);
