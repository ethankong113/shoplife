import { connect } from 'react-redux';
import { fetchMarkers, clearMarkers } from '../../actions/map_actions';
import { extractMarkers } from '../../utils/selectors';
import Map from './map';

const mapStateToProps = (state) => ({
   markers: extractMarkers(state.markers)
 });

 const mapDispatchToProps = (dispatch) => ({
    fetchMarkers: (tripId)=>{dispatch(fetchMarkers(tripId));},
    clearMarkers: (tripId)=>{dispatch(clearMarkers(tripId));}
 });

 export default connect(mapStateToProps, mapDispatchToProps)(Map);
