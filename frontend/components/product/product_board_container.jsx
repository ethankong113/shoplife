import React from 'react';
import ProductBoard from './product_board';
import { connect } from 'react-redux';
import { getCurrentUser, getProductList } from '../../utils/selectors';
import { fetchProductListByShop, clearProductList } from '../../actions/product_list_actions';

const mapStateToProps = (state) => ({
   currentUser: getCurrentUser(state.session),
   shop: state.shop,
   trip: state.trip,
   products: getProductList(state.productList)
 });

 const mapDispatchToProps = (dispatch) => ({
    fetchProductListByShop: (id)=>{dispatch(fetchProductListByShop(id));},
    clearProductList: ()=>{dispatch(clearProductList());}
 });

export default connect(mapStateToProps, mapDispatchToProps)(ProductBoard);
