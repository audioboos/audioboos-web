import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Artist } from "../../models";

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL as string,
  }),
  endpoints(build) {
    return {
      artists: build.query<Array<Artist>, void>({
        query: () => "/artists",
      }),
      artist: build.query<Artist, string>({
        query: (name) => `/artists/${name}`,
      }),
    };
  },
});

export const { useArtistsQuery, useArtistQuery } = api;
export default api;
