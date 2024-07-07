// Or from '@reduxjs/toolkit/query/react'
import { cliamsHeader } from "@/lib/utils";
import { IbaseTypeResponse } from "@/types/type-server-response";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_API_URL,
    prepareHeaders: cliamsHeader,
  }),
  endpoints: (build) => ({
    getMovieTop: build.query<IbaseTypeResponse, string>({
      query: (group) => `trending/movie/${group}?language=en-US`,
    }),
  }),
});

export const { useGetMovieTopQuery } = movieApi;
