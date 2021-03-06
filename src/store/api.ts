import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';
import { Album, Artist, PlayLog, Settings } from '../models';
import { Profile } from '../models/Profile';
import { refreshTokenCookies } from '../services/auth/util';
import { RootState } from './redux/store';
const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL as string,
  credentials: 'include',
});

const baseQueryWithRefresh: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions
) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    // try to get a new token
    const refreshResult = await refreshTokenCookies();
    if (refreshResult.status === 200) {
      result = await baseQuery(args, api, extraOptions);
    } else {
      //TODO: redirect to login page or something?
      //api.dispatch(loggedOut());
    }
  }
  return result;
};

const api = createApi({
  baseQuery: baseQueryWithRefresh,
  tagTypes: ['Artist', 'Album', 'Track', 'PlayLog'],
  endpoints(build) {
    return {
      artists: build.query<Array<Artist>, void>({
        query: () => ({ url: '/artists', method: 'GET' }),
      }),
      artist: build.query<Artist, string>({
        query: (name) => ({ url: `/artists/${name}`, method: 'GET' }),
      }),
      settings: build.query<Settings, void>({
        query: () => ({ url: `/settings`, method: 'GET' }),
      }),
      auth: build.query<Profile, void>({
        query: () => ({ url: `/auth/profile`, method: 'GET' }),
      }),
      updateArtist: build.mutation<Artist, Partial<Artist>>({
        query: ({ ...patch }) => ({
          url: `/artists`,
          method: 'PATCH',
          body: patch,
        }),
        invalidatesTags: ['Artist'],
      }),

      updateAlbum: build.mutation<Artist, Partial<Album>>({
        query: ({ ...patch }) => ({
          url: `/albums`,
          method: 'PATCH',
          body: patch,
        }),
        invalidatesTags: ['Album'],
      }),
      profile: build.query<void, Profile>({
        query: () => ({
          url: `/profile`,
          method: 'GET',
        }),
      }),
    };
  },
});

export const {
  useSettingsQuery,
  useArtistsQuery,
  useArtistQuery,
  useUpdateAlbumMutation,
  useUpdateArtistMutation,
  useProfileQuery,
  useAuthQuery,
} = api;
export default api;
