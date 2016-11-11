export const SUBMIT_SEARCH = "SUBMIT_SEARCH";
export const CLEAR_SEARCH = "CLEAR_SEARCH";

export const submitSearch = query => ({
  type: SUBMIT_SEARCH,
  query
});

export const clearSearch = () => ({
  type: CLEAR_SEARCH
});
