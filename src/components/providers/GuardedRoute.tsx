import React from 'react';
import { Redirect } from 'react-router-dom';
interface IGuardedRouteProps {}
const GuardedRoute = ({ component: Component, isAuthenticated, isLoading, ...rest }: any) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }
  return <Component {...rest} />;
};

export default GuardedRoute;
