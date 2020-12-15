import {
  DELETE_USER,
  EDIT_USER,
  GET_USER,
  LOGIN_USER,
  LOGOUT_USER,
  REGISTER_USER,
} from "./types";

export const loginUser = (data) => ({
  type: LOGIN_USER,
  payload: data,
});

export const registerUser = (data) => ({
  type: REGISTER_USER,
  payload: data,
});

export const logoutUser = () => ({
  type: LOGOUT_USER,
});

export const getUser = () => ({
  type: GET_USER,
});

export const editUser = (data) => ({
  type: EDIT_USER,
  payload: data
});

export const deleteUser = () => ({
  type: DELETE_USER,
});
