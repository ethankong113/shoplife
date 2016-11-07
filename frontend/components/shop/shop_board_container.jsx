import React from 'react';
import { connect } from 'react-redux';
import ShopBoard from './shop_board';
import { getCurrentUser } from '../../utils/selectors';
import { createShop, readShop, updateShop, deleteShop } from '../../actions/shop_actions';

const mapStateToProps = (state) => ({
   shops: state.shops,
   shopDetail: state.shopDetail,
   currentUser: getCurrentUser(state.session)
 });

const mapDispatchToProps = (dispatch) => ({
   createShop: (shop)=>{dispatch(createShop(shop));},
   readShop: (id)=>{dispatch(readShop(id));},
   updateShop: (shop)=>{dispatch(updateShop(shop));},
   deleteShop: (id)=>{dispatch(deleteShop(id));}
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopBoard);
