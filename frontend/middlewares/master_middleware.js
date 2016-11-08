import { applyMiddleware } from 'redux';
import SessionMiddleware from './session_middleware';
import ProfileMiddleware from './profile_middleware';
import ShopMiddleware from './shop_middleware';
import ShopListMiddleware from './shop_list_middleware';
import ProductMiddleware from './product_middleware';
import ProductListMiddleware from './product_list_middleware';

export default applyMiddleware(SessionMiddleware, ProfileMiddleware, ShopMiddleware, ShopListMiddleware, ProductMiddleware, ProductListMiddleware);
