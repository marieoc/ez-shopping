import { combineReducers } from "redux";
import itemReducer from "./item";
import userReducer from "./user";

export default combineReducers({
  itemReducer,
  userReducer,
});
