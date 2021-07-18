import React from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";

import SignIn from "./containers/page/signIn";
import SignUp from "./containers/page/signUp";
import App from "./containers/app/app";

const RestrictedRoute = ({
  isLoggedIn,
  component: Component,
  redirectTo,
  ...rest
}) => (
  <Route {...rest}>
    {(props) => {
      return isLoggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to={redirectTo} />
      );
    }}
  </Route>
);

function PublicRoutes({ isLoggedIn }) {
  return (
    <Switch>
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
      <Route
        exact
        path="/404"
        component={() => <h1>Error: 404 Not Found</h1>}
      />
      <RestrictedRoute
        path="/"
        redirectTo="/signin"
        isLoggedIn={isLoggedIn}
        component={App}
      />
      <Route exact component={() => <h1>Opp error</h1>} />
    </Switch>
  );
}

const mapStateToProps = (state, props) => {
  return {
    isLoggedIn: true,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(PublicRoutes);
