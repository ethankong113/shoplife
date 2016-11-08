import React from 'react';
import ProductBoard from './product_board';
import { connect } from 'react-redux';
import { getCurrentUser, getProductList } from '../../utils/selectors';
import { fetchProductListByShop } from '../../actions/product_list_actions';

const mapStateToProps = (state) => ({
   currentUser: getCurrentUser(state.session),
   shop: state.shop,
   products: getProductList(state.productList)
 });

 const mapDispatchToProps = (dispatch) => ({
    fetchProductListByShop: (id)=>{dispatch(fetchProductListByShop(id));}
 });

export default connect(mapStateToProps, mapDispatchToProps)(ProductBoard);
