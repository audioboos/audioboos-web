import { Profile } from '../models/Profile';
import api from '../store/redux/api';

export const useAuthUser = (): Profile | undefined => {
  const state = api.endpoints.auth.useQuery();
  return state.data;
};
