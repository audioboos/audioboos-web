import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { Profile } from '../models/Profile';
import SplashScreen from '../pages/splash/splash-page.component';
import { setAuthChecked, setCredentials } from '../store/auth';
import api from '../store/redux/api';
import { useAuthUser } from './use-user.hook';
interface UserMiddlwareProps {
  children: React.ReactNode;
}
const UserMiddleware: FC<UserMiddlwareProps> = ({ children }: UserMiddlwareProps) => {
  const dispatch = useDispatch();
  console.log('user-resolver.middleware', 'Looking for a user');
  const storageHash = localStorage.getItem('storageHash');
  const user = useAuthUser();
  api.endpoints.auth.useQuery();

  if (!user && storageHash) {
    setTimeout(() => {
      localStorage.removeItem('storageHash');
    }, 5000);
    return <SplashScreen />;
  }
  console.log('user-resolver.middleware', 'user', user);
  return <>{children}</>;
};

export default UserMiddleware;
