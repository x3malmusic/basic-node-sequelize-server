import { AUTHENTICATE_USER, SET_USER, SET_USER_LIST } from "../actions/types";
import { getToken } from "../../services/token";

const initialState = {
  isAuthenticated: !!getToken() || false,
  email: "",
  name: "",
  lastName: "",
  userList: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        email: action.payload.email,
        name: action.payload.name,
        lastName: action.payload.lastName,
      };
    case SET_USER_LIST:
      return {
        ...state,
        userList: action.payload,
      };
    case AUTHENTICATE_USER:
      return {
        ...state,
        isAuthenticated: action.payload,
      };
    default:
      return state;
  }
};
