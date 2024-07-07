import { SeriesTvGroupState } from "./type-client-requets.";

export enum MovieListTileType {
  TRENDING = "trending",
  POPULAR = "popular",
}

export type ItitleSeriesItem = {
  title: string;
  classApply: string;
  slug: SeriesTvGroupState;
};


