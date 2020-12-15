import { combineReducers } from "redux";
import user from "./user";
import errorLoading from "./errorLoading";

export default combineReducers({ user, errorLoading });