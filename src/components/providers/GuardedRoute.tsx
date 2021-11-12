import React from 'react';
import { Redirect } from 'react-router-dom';
import { useAuthQuery } from '../../store/redux/api';
import { AuthLayout } from '../layout';
interface IGuardedRouteProps {
  component: React.ReactNode;
  fallback?: React.ReactNode;
  redirect: string;
}
const GuardedRoute = ({ component: Component, fallback: Fallback, redirect, ...rest }: any) => {
  const auth = useAuthQuery();

  React.useEffect(() => {
    console.log('GuardedRoute', 'auth', auth);
  }, [auth]);
  const _render = () => {
    if (auth.isLoading) {
      return <div>Loading...</div>;
    }
    if (auth.isSuccess) {
      debugger;
      return (
        <AuthLayout>
          <Component {...rest} />
        </AuthLayout>
      );
    }
    return Fallback ? <Fallback /> : <Redirect to={redirect} />;
  };

  return _render();
};

export default GuardedRoute;
