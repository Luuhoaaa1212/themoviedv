// Or from '@reduxjs/toolkit/query/react'
import { cliamsHeader } from "@/lib/utils";
import { IbaseTypeResponsePeople } from "@/types/type-server-response";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const peopleApi = createApi({
  reducerPath: "peopleApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BASE_API_URL,
    prepareHeaders: cliamsHeader,
  }),
  endpoints: (build) => ({
    getPeoplePopular: build.query<IbaseTypeResponsePeople, void>({
      query: () => `person/popular?language=en-US&page=1`,
    }),
  }),
});

export const { useGetPeoplePopularQuery } = peopleApi;
