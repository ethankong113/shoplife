export const FETCH_MARKERS = "FETCH_MARKERS";
export const RECEIVE_MARKERS = "RECEIVE_MARKERS";
export const REMOVE_MARKER = "REMOVE_MARKER";
export const CLEAR_MARKERS = "CLEAR_MARKERS";

export const fetchMarkers = tripId => ({
  type: FETCH_MARKERS,
  tripId
});

export const receiveMarkers = markers => ({
  type: RECEIVE_MARKERS,
  markers
});

export const removeMarker = markerId => ({
  type: REMOVE_MARKER,
  markerId
});

export const clearMarkers = () => ({
  type: CLEAR_MARKERS
});
