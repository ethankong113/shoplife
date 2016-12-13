import React from 'react';
import ProductBoard from './product_board';
import { connect } from 'react-redux';
import { getCurrentUser, getProductList, emptyProductList } from '../../utils/selectors';
import { fetchProductListByShop, fetchProductListByTrip, fetchProductListByProfile, clearProductList } from '../../actions/product_list_actions';
import { unpinItem, unpinItemFromBoard, unpinItemFromPins } from '../../actions/pin_actions';

const mapStateToProps = (state) => ({
   currentUser: getCurrentUser(state.session),
   shop: state.shop,
   trip: state.trip,
   products: getProductList(state.productList),
   emptyProductList: emptyProductList(state.productList)
 });

 const mapDispatchToProps = (dispatch) => ({
    fetchProductListByShop: (id)=>{dispatch(fetchProductListByShop(id));},
    fetchProductListByTrip: (id)=>{dispatch(fetchProductListByTrip(id));},
    fetchProductListByProfile: (id)=>{dispatch(fetchProductListByProfile(id));},
    clearProductList: ()=>{dispatch(clearProductList());},
    unpinItem: (tripId, productId) => {dispatch(unpinItem(tripId, productId));},
    unpinItemFromBoard: (tripId, productId) => {dispatch(unpinItemFromBoard(tripId, productId));},
    unpinItemFromPins: (tripId, productId) => {dispatch(unpinItemFromPins(tripId, productId));}
 });

export default connect(mapStateToProps, mapDispatchToProps)(ProductBoard);
