import { createAction } from "@reduxjs/toolkit";

const changeView = createAction("CHANGE_VIEW", (width) => {
  return { payload: { width: width } };
});

const changeCollaps = createAction("CHANGE_COLLAPS", (width) => {
  return { payload: { width: width } };
});

const toggleDraw = createAction("TOGGLE_DRAW");

export default { changeView, changeCollaps, toggleDraw };
