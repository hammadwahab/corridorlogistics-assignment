// store.js
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { venueReducer } from "./reducers";

const store = createStore(venueReducer, applyMiddleware(thunk));

export default store;
