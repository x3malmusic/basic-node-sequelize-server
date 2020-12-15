import { takeLatest, put, select } from "redux-saga/effects";
import { deleteToken, saveToken } from "../../services/token";
import { safe } from "./errorHandler";

import {
  LOGIN_USER,
  SET_USER,
  GET_USER,
  REGISTER_USER,
  LOGOUT_USER,
  AUTHENTICATE_USER,
  EDIT_USER,
  DELETE_USER,
  SET_USER_LIST,
} from "../actions/types";
import http from "../../services/http";

const getUserData = function* () {
  const response = yield http.get("/api/user");
  yield put({ type: SET_USER, payload: response.data });
  const userList = yield http.get("/api/users");
  yield put({ type: SET_USER_LIST, payload: userList.data });
};

const loginUser = function* ({ payload }) {

  const response = yield http.post("/api/login", {
    email: payload.email,
    password: payload.password,
  });
  yield saveToken(JSON.stringify(response.data.token));
  yield put({ type: AUTHENTICATE_USER, payload: true });
};

const registerUser = function* ({ payload }) {
  const newUser = yield http.post("/api/register", {
    email: payload.email,
    password: payload.password,
    name: payload.name,
    lastName: payload.lastName,
  });

  yield put({ type: LOGIN_USER, payload: {...newUser.data, password: payload.password} });
};

const logoutUser = function* () {
  yield deleteToken();
  yield put({ type: AUTHENTICATE_USER, payload: false });
};

const deleteUser = function* () {
  yield http.delete("/api/user");
  yield deleteToken();
  yield put({ type: AUTHENTICATE_USER, payload: false });
};

const editUser = function* ({ payload }) {
  yield http.put("/api/user", {
    name: payload.name,
    lastName: payload.lastName,
  });

  const email = yield select(state => state.user.email)

  yield put({
    type: SET_USER,
    payload: { email, name: payload.name, lastName: payload.lastName },
  });
};

export default [
  takeLatest(LOGIN_USER, safe(loginUser)),
  takeLatest(GET_USER, safe(getUserData)),
  takeLatest(EDIT_USER, safe(editUser)),
  takeLatest(DELETE_USER, safe(deleteUser)),
  takeLatest(GET_USER, safe(getUserData)),
  takeLatest(REGISTER_USER, safe(registerUser)),
  takeLatest(LOGOUT_USER, safe(logoutUser)),
];
