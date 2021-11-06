import React from "react";
import { Route, Redirect } from "react-router-dom";

const GuardedRoute = ({ component: Component, predicate, redirectTo, ...rest }: any) => (
  <Route {...rest} render={(props) => (
    predicate
      ? <Component {...props} />
      : <Redirect to={redirectTo} />
  )} />
);

export default GuardedRoute;