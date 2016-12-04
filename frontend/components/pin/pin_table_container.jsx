import { connect } from 'react-redux';
import { pinItem, unpinItem } from '../../actions/pin_actions';
import { getCurrentUser, getPinList } from '../../utils/selectors';
import PinTable from './pin_table';

const mapStateToProps = (state) => ({
   currentUser: getCurrentUser(state.session),
   pins: getPinList(state.pins)
 });

 const mapDispatchToProps = (dispatch) => ({
    pinItem: (tripId, productId)=>{dispatch(pinItem(tripId, productId));},
    unpinItem: (tripId, productId)=>{dispatch(unpinItem(tripId, productId));}
 });

export default connect(mapStateToProps, mapDispatchToProps)(PinTable);
