import { connect } from 'react-redux';
import TripBoard from './trip_board';
import { getCurrentUser, getTripList, getProfileId } from '../../utils/selectors';
import { createTrip } from '../../actions/trip_actions';
import { fetchTripListByUser, fetchTripListByFollower, clearTripList } from '../../actions/trip_list_actions';


const mapStateToProps = (state) => ({
   trips: getTripList(state.tripList),
   trip: state.trip,
   currentUser: getCurrentUser(state.session)
 });

 const mapDispatchToProps = (dispatch) => ({
    createTrip: (trip)=>{dispatch(createTrip(trip));},
    fetchTripListByUser: (id)=>{dispatch(fetchTripListByUser(id));},
    fetchTripListByFollower: (id)=>{dispatch(fetchTripListByFollower(id));},
    clearTripList: ()=>{dispatch(clearTripList());}
 });

 export default connect(mapStateToProps, mapDispatchToProps)(TripBoard);
