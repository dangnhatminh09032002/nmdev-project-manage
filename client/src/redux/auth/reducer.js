import { createReducer } from "@reduxjs/toolkit";

import authAction from "./actions";
const { login } = authAction;

const initAuth = {};
const loginCase = (state, action) => {
  console.log("login request");
};

const authReducer = createReducer(initAuth, (builder) => {
  builder.addCase(login, loginCase);
});

export default authReducer;
