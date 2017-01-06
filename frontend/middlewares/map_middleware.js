import { FETCH_MARKERS, receiveMarkers } from '../actions/map_actions';
import { fetchMarkersAJAX } from '../utils/map_api_utils';


const MapMiddleware = ({getState, dispatch}) => next => action => {
  const receiveMarkersCB = markers => {dispatch(receiveMarkers(markers));};
  const errorCB = (err) => {console.log(err);};

  switch(action.type) {
    case FETCH_MARKERS:
      fetchMarkersAJAX(action.tripId, receiveMarkersCB, errorCB);
      return next(action);
    default:
      return next(action);
  }
};

export default MapMiddleware;
