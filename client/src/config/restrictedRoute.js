const RestrictedRoute = ({
  isLoggedIn,
  component: Component,
  Route,
  Redirect,
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
