import React from "react";
import DashAppHolder from "./dashAppStyles";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./redux/store";
import PublicRoutes from "./router";
import GlobalFonts from "./config/globalStyle";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

export default function DashApp() {
  return (
    <DashAppHolder>
      <Provider store={store}>
        <Router history={history}>
          <GlobalFonts />
          <PublicRoutes />
        </Router>
      </Provider>
    </DashAppHolder>
  );
}
