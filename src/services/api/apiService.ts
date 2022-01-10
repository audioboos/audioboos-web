import axios, { AxiosInstance } from 'axios';
import { refreshTokenCookies } from '../auth/util';

class ApiService {
  private static _client: AxiosInstance | undefined = undefined;
  private static _cancelToken: any;
  private static _source: any;

  public cancel = () => {
    if (ApiService._client !== undefined && ApiService._source !== undefined) {
      ApiService._source().cancel();
    }
  };
  protected getInstance = async (): Promise<AxiosInstance> => {
    if (!ApiService._client) {
      ApiService._client = await this.requestClient();
      ApiService._cancelToken = axios.CancelToken;
      ApiService._source = axios.CancelToken.source;
    }
    if (ApiService._client === undefined) {
      throw Error('Unable to resolve axios client');
    }
    return ApiService._client;
  };
  public requestClient = async () => {
    const instance = axios.create({
      baseURL: import.meta.env.VITE_API_URL as string,
      maxRedirects: 0,
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });
    instance.interceptors.response.use(
      (res) => {
        return res;
      },
      async (err) => {
        const originalConfig = err.config;
        if (originalConfig.url !== '/auth/signin' && err.response) {
          // Access Token was expired
          if (err.response.status === 401 && !originalConfig._retry) {
            originalConfig._retry = true;

            try {
              //SUPER important we use another axios instance here,
              //otherwise it will get caught in a retry loop
              await refreshTokenCookies();
              return instance(originalConfig);
            } catch (_error) {
              originalConfig._retry = false;
              return Promise.reject(_error);
            }
          }
        }
        return Promise.reject(err);
      }
    );
    return instance;
  };
}
export default ApiService;
