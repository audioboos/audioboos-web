import React from 'react';
import { useAuthQuery } from '../../store/redux/api';
import { AuthLayout } from '../layout';
interface IGuardedRouteProps {}
const GuardedRoute = ({ component: Component, fallback: Fallback, ...rest }: any) => {
  const auth = useAuthQuery();

  if (auth.isLoading) {
    return <div>Loading...</div>;
  }
  if (auth.isSuccess) {
    return (
      <AuthLayout>
        <Component {...rest} />
      </AuthLayout>
    );
  }
  return <Fallback {...rest} />;
};

export default GuardedRoute;
