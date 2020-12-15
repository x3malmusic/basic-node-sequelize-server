import { SET_LOADING, SET_ERROR } from "../actions/types";

const initialState = {
  isLoading: false,
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};