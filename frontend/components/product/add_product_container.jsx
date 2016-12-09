import { connect } from 'react-redux';
import { createProduct, clearProduct, clearProductMessage } from '../../actions/product_actions';
import AddProductModal from './add_product_modal';

const mapStateToProps = (state) => ({
   shop_id: state.shop.shop.id,
   msg: state.product.msg,
   product: state.product.product
 });

const mapDispatchToProps = (dispatch) => ({
   createProduct: (product)=>{dispatch(createProduct(product));},
   clearProduct: ()=>{dispatch(clearProduct());},
   clearProductMessage: ()=>{dispatch(clearProductMessage());}
});

export default connect(mapStateToProps, mapDispatchToProps)(AddProductModal);
