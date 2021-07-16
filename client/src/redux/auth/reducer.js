import { createReducer } from "@reduxjs/toolkit";

import authAction from "./actions";
const { loginRequest } = authAction;

const initAuth = {
  isAuthing: "flase",
  isLoggedIn: false,
  token: "",
};

const loginCase = (state, action) => {};

const authReducer = createReducer(initAuth, (builder) => {
  builder.addCase(loginRequest, loginCase);
});

export default authReducer;
