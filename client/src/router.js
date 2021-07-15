import React from "react";
import { connect } from "react-redux";
import { Route, Switch, Redirect } from "react-router-dom";

import SignIn from "./containers/page/signIn";
import SignUp from "./containers/page/signUp";

const RestrictedRoute = ({
  bool,
  component: Component,
  redirectTo,
  ...rest
}) => (
  <Route {...rest}>
    {(props) => {
      return bool ? <Component {...props} /> : <Redirect to={redirectTo} />;
    }}
  </Route>
);

function PublicRoutes({ isLoggedIn }) {
  return (
    <Switch>
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/signup" component={SignUp} />
      {/* <RestrictedRoute component={}/> */}
    </Switch>
  );
}

const mapStateToProps = (state, props) => {
  return {
    isLoggedIn: false,
  };
};
const mapDispatchToProps = (dispatch, props) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(PublicRoutes);
