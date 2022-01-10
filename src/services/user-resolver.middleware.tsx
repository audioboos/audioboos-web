import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import SplashScreen from '../pages/splash/SplashScreen';
import { setAuthChecked, setCredentials } from '../store/auth';
import api from '../store/redux/api';
import { useAuthUser } from './use-user.hook';

const UserMiddleware: FC = ({ children }) => {
  const dispatch = useDispatch();
  console.log('user-resolver.middleware', 'Looking for a user');
  const storageHash = localStorage.getItem('storageHash');
  const user = useAuthUser();
  api.endpoints.auth.useQuery();

  if (!user && storageHash) {
    return <SplashScreen />;
  }
  console.log('user-resolver.middleware', 'user', user);
  if (user) {
    dispatch(setCredentials(user));
  } else {
    dispatch(setAuthChecked(true));
  }
  return <>{children}</>;
};

export default UserMiddleware;
