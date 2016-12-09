import { connect } from 'react-redux';
import { readProduct, clearProduct } from '../../actions/product_actions';
import { fetchPinList, clearPinList } from '../../actions/pin_actions';
import { getCurrentUser} from '../../utils/selectors';
import ShowProductModal from './show_product_modal';

const mapStateToProps = (state) => ({
   shop_id: state.shop.shop.id,
   product: state.product.product,
   currentUser: getCurrentUser(state.session)
 });

const mapDispatchToProps = (dispatch) => ({
   readProduct: (id)=>{dispatch(readProduct(id));},
   clearProduct: (id)=>{dispatch(clearProduct(id));},
   fetchPinList: (id)=>{dispatch(fetchPinList(id));},
   clearPinList: ()=>{dispatch(clearPinList());}
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowProductModal);
