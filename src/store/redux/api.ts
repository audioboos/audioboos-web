import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Artist, Settings } from '../../models';
import { Profile } from "../../models/Profile";

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL as string,
    prepareHeaders(headers) {
      return headers;
    },
    credentials: 'include',
  }),
  endpoints(build) {
    return {
      artists: build.query<Array<Artist>, void>({
        query: () => '/artists',
      }),
      artist: build.query<Artist, string>({
        query: (name) => `/artists/${name}`,
      }),
      settings: build.query<Settings, void>({
        query: () => `/settings`,
      }),
      auth: build.query<Profile, void>({
        query: () => `/auth/profile`,
      }),
    };
  },
});

export const { useSettingsQuery, useArtistsQuery, useArtistQuery, useAuthQuery } = api;
export default api;
