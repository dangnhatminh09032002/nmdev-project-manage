import { createAction } from "@reduxjs/toolkit";

const login = createAction("LOGIN_REQUEST", (token) => {
  return {
    payload: {
      token,
    },
  };
});
const logout = createAction("LOGOUT");
const loginSuccess = createAction("LOGIN_SUCCESS");

const authAction = { login, loginSuccess, logout };

export default authAction;
