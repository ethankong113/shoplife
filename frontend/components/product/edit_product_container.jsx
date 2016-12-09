import { connect } from 'react-redux';
import { readProduct, updateProduct, deleteProduct, clearProduct, clearProductMessage } from '../../actions/product_actions';
import EditProductModal from './edit_product_modal';

const mapStateToProps = (state) => ({
   shop_id: state.shop.shop.id,
   product: state.product.product,
   msg: state.product.msg
 });

const mapDispatchToProps = (dispatch) => ({
   updateProduct: (product)=>{dispatch(updateProduct(product));},
   readProduct: (id)=>{dispatch(readProduct(id));},
   deleteProduct: (id)=>{dispatch(deleteProduct(id));},
   clearProduct: ()=>{dispatch(clearProduct());},
   clearProductMessage: ()=>{dispatch(clearProductMessage());}
});

export default connect(mapStateToProps, mapDispatchToProps)(EditProductModal);
