import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import data from "./reducers/index";

const store = createStore(
  combineReducers({data}),
  applyMiddleware(thunk)
)

export default store;
