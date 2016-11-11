import Trip from './trip';
import { connect } from 'react-redux';
import { readTrip, updateTrip, deleteTrip, clearTrip } from '../../actions/trip_actions';
import { fetchProductListByTrip } from '../../actions/product_list_actions';
import { getCurrentUser } from '../../utils/selectors';

const mapStateToProps = (state) => ({
  currentUser: getCurrentUser(state.session),
  trip: state.trip
 });

 const mapDispatchToProps = (dispatch) => ({
    readTrip: (id)=>{dispatch(readTrip(id));},
    updateTrip: (trip)=>{dispatch(updateTrip(trip));},
    deleteTrip: (id)=>{dispatch(deleteTrip(id));},
    clearTrip: ()=>{dispatch(clearTrip());},
    fetchProductListByTrip: (id)=>{dispatch(fetchProductListByTrip(id));}
 });

export default connect(mapStateToProps, mapDispatchToProps)(Trip);
