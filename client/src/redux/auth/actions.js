import { createAction } from "@reduxjs/toolkit";

const loginRequest = createAction("LOGIN_REQUEST");
const loginSuccess = createAction("LOGIN_SUCCESS");
const loginError = createAction("LOGIN_ERROR");

const logout = createAction("LOGOUT");

export default { loginRequest, loginSuccess, loginError, logout };
