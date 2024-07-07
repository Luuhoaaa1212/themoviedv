import {
  MovieGroupState,
  SeriesTvGroupState,
} from "@/types/type-client-requets.";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IpropsInitState {
  statusLoading: boolean;
  trending: MovieGroupState;
  seriesTv: SeriesTvGroupState;
}

const initialState: IpropsInitState = {
  statusLoading: true,
  trending: "day",
  seriesTv: "popular",
};

export const movieGroupSlice = createSlice({
  name: "movieGroup",
  initialState,
  reducers: {
    setGroupTrending(state, action: PayloadAction<MovieGroupState>) {
      state.trending = action.payload;
      state.statusLoading = !state.statusLoading;
    },
    setGroupSeriesTv(state, action: PayloadAction<SeriesTvGroupState>) {
      state.seriesTv = action.payload;
      state.statusLoading = !state.statusLoading;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setGroupTrending, setGroupSeriesTv } = movieGroupSlice.actions;

export default movieGroupSlice.reducer;
