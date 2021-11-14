import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAuthQuery } from '../../store/redux/api';
import { AuthLayout } from '../layout';

const PrivateRoute = ({ component: Component, fallback: Fallback, ...rest }: any) => {
  const auth = useAuthQuery();
  return (
    <Route
      {...rest}
      render={(props) =>
        auth.isSuccess && auth.data.name ? (
          <AuthLayout>
            <Component {...props} />
          </AuthLayout>
        ) : Fallback ? (
          <Fallback {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};
export default PrivateRoute;
