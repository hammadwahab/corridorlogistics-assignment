// actions.js
export const SET_VENUES = "SET_VENUES";

export const setVenues = (venues) => ({
  type: SET_VENUES,
  payload: venues,
});
