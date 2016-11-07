import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import ProfileMiddleware from './profile_middleware';
import ShopDetailMiddleware from './shop_detail_middleware';
import ProductMiddleware from './product_middleware';
import ProductListMiddleware from './product_list_middleware';

export default applyMiddleware(SessionMiddleware, ProfileMiddleware, ShopDetailMiddleware, ProductMiddleware, ProductListMiddleware);
