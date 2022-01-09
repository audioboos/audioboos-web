import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import FullscreenProgress from '../pages/FullScreenProgress';
import { setCredentials } from '../store/auth';
import api from '../store/redux/api';
import { RootState } from '../store/redux/store';
import { useAuthUser } from './use-user.hook';

const UserMiddleware: FC = ({ children }) => {
  const dispatch = useDispatch();
  console.log('user-resolver.middleware', 'Looking for a user');
  const storageHash = localStorage.getItem('storageHash');
  const user = useAuthUser();
  api.endpoints.auth.useQuery();

  if (!user && storageHash) {
    return <FullscreenProgress />;
  }
  console.log('user-resolver.middleware', 'user', user);
  if (user) {
    dispatch(setCredentials(user));
  }
  return <>{children}</>;
};

export default UserMiddleware;
