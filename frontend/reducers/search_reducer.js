import { SUBMIT_SEARCH, CLEAR_SEARCH } from '../actions/search_actions';

const _nullSearch = {
  query: "",
  type: null
};

const SearchReducer = (state = _nullSearch, action) => {
  Object.freeze(state);
  switch(action.type) {
    case SUBMIT_SEARCH:
      let newState = {query: action.query, type: "BY_PRODUCT"};
      return newState;
    case CLEAR_SEARCH:
      return _nullSearch;
    default:
      return state;
  }
};

export default SearchReducer;
