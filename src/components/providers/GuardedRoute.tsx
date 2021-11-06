import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useSettingsQuery } from '../../store/redux/api';

const GuardedRoute = ({ component: Component, predicate, redirectTo, ...rest }: any) => {
  const queryResult = useSettingsQuery();

  React.useEffect(() => {
    console.log('GuardedRoute', 'GuardedRoute', queryResult);
  }, [queryResult]);
  const requireSetup = (nextState: any, replace: any) => {
    if (!queryResult.data || !queryResult.data.siteName) {
      replace(redirectTo);
    }
  };

  return (
    <Route
      {...rest}
      onEnter={requireSetup}
      render={(props) => (predicate ? <Component {...props} /> : <Redirect to={redirectTo} />)}
    />
  );
};

export default GuardedRoute;
