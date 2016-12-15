import { merge, isEmpty } from 'lodash';
import { RECEIVE_SIDE_BAR_TRIP_LIST } from '../actions/trip_list_actions';

const _nullSideBar = {
  trips: {}
};

const SideBarReducer = (state = _nullSideBar, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SIDE_BAR_TRIP_LIST:
      let newState = merge({}, state, {trips: action.trips});
      return newState;
    default:
      return state;
  }
};

export default SideBarReducer;
