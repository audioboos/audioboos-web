import React, { FC } from 'react';
import FullscreenProgress from '../pages/FullScreenProgress';
import api from '../store/redux/api';
import { RootState, useTypedSelector } from '../store/redux/store';
import { useAuthUser } from './use-user.hook';

const UserMiddleware: FC = ({ children }) => {
  console.log('user-resolver.middleware', 'Looking for a user');
  const storageHash = localStorage.getItem('storageHash');
  const user = useAuthUser();
  api.endpoints.auth.useQuery();

  if (!user && storageHash) {
    return <FullscreenProgress />;
  }
  return <>{children}</>;
};

export default UserMiddleware;
