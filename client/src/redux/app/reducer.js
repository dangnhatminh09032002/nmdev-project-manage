import { createReducer } from "@reduxjs/toolkit";
import { getView } from "../../helpers/utility";
import appAction from "./actions";

const { changeView, changeCollaps, toggleDraw } = appAction;
const initApp = {
  view: getView(window.innerWidth),
  openDrawer: getView(window.innerWidth) === "desktopView" ? false : true,
  collapsed: getView(window.innerWidth) === "mobileView" ? "hidden" : "block",
};

const changeViewCase = (state, action) => {
  state.view = getView(action.payload.width);
  return state;
};

const toggleDrawCase = (state, action) => {
  state.openDrawer = !state.openDrawer;
  return state;
};
const changeCollapsCase = (state, action) => {
  state.collapsed =
    getView(window.innerWidth) === "mobileView" ? "hidden" : "block";
  return state;
};

const appReducer = createReducer(initApp, (builder) => {
  builder.addCase(changeView, changeViewCase);
  builder.addCase(toggleDraw, changeViewCase);
  builder.addCase(changeCollaps, changeViewCase);
});

export default appReducer;
