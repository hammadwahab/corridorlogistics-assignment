// reducers.js
import { SET_VENUES } from "./actions";

const initialState = {
  venues: [],
};

export const venueReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VENUES:
      return { ...state, venues: action.payload };
    default:
      return state;
  }
};
