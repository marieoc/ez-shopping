import { combineReducers } from "redux";
import itemReducer from "./item";
import usersReducer from "./users";

export default combineReducers({
  itemReducer,
  usersReducer,
});
