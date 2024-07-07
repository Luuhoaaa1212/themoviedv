import { setupListeners } from "@reduxjs/toolkit/query";
import { configureStore } from "@reduxjs/toolkit";
import movieGroupReducer from "./slices/movieGroupSlice";
import { seriesApi } from "./services/series.service";
import { movieApi } from "./services/movie.service";
import { peopleApi } from "./services/people.service";

export const store = configureStore({
  reducer: {
    movieGroup: movieGroupReducer,
    [movieApi.reducerPath]: movieApi.reducer,
    [seriesApi.reducerPath]: seriesApi.reducer,
    [peopleApi.reducerPath]: peopleApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(movieApi.middleware)
      .concat(seriesApi.middleware)
      .concat(peopleApi.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

// configure listeners using the provided defaults
setupListeners(store.dispatch);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
