import React from 'react';
import { connect } from 'react-redux';
import ShopBoard from './shop_board';

const mapStateToProps = (state) => ({
   shops: state.shops,
   shopDetail: state.shopDetail
 });

const mapDispatchToProps = (dispatch) => ({
   createShop: (shop)=>{dispatch(createShop(shop));},
   readShop: (id)=>{dispatch(readShop(id));},
   updateShop: (shop)=>{dispatch(updateShop(shop));},
   deleteShop: (id)=>{dispatch(deleteShop(id));}
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopBoard);
