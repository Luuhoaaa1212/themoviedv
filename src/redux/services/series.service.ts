// Or from '@reduxjs/toolkit/query/react'
import { cliamsHeader } from "@/lib/utils";
import {
  IbaseTypeResponse,
  IresultTypeVideo,
} from "@/types/type-server-response";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const seriesApi = createApi({
  reducerPath: "seriesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_API_URL,
    prepareHeaders: cliamsHeader,
  }),
  endpoints: (build) => ({
    getSeriesTv: build.query<IbaseTypeResponse, string>({
      query: (group) => `movie/${group}?language=en-US&page=1`,
    }),
    getVideoById: build.mutation<IresultTypeVideo, number>({
      query: (id) => ({
        url: `movie/${id}/videos?language=en-US`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetSeriesTvQuery, useGetVideoByIdMutation } = seriesApi;
