import axios, { AxiosResponse } from 'axios';

export const refreshTokenCookies = async (): Promise<AxiosResponse> => {
  axios.defaults.withCredentials = true;
  const refreshResult = await axios.post(`${import.meta.env.VITE_API_URL}/auth/refresh`, {
    withCredentials: true,
  });
  return refreshResult;
};
