import React from "react";
import { createRoot } from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { debounce } from "debounce";

import { stepReducer, summaryReducer } from "./redux/reducers";
import { loadState, saveState } from "./redux/localStorage";
import App from "./App.jsx";
import "./assets/App.css";

const logger = createLogger();
const rootReducers = combineReducers({
  stepReducer,
  summaryReducer,
});
export const store = configureStore({
  devTools: true,
  reducer: rootReducers,
  preloadedState: loadState(),
  applyMiddleware: applyMiddleware(thunkMiddleware, logger),
});

store.subscribe(
  debounce(() => {////debounce to save the state once each 800ms
    saveState(store.getState());
  }, 800)
);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
