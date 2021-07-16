import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./sagas";
import reducers from "./reducers";

const rootReducer = combineReducers(reducers);
const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunk, sagaMiddleware),
});
sagaMiddleware.run(rootSaga);

export default store;
