import { ItitleSeriesItem, MovieListTileType } from "@/types";

export const sliderSettings = {
  440: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
  680: {
    slidesPerView: 5,
    spaceBetween: 30,
  },
  1024: {
    slidesPerView: 7,
    spaceBetween: 50,
  },
};

export const seriresTitleList: ItitleSeriesItem[] = [
  {
    title: "Popular",
    classApply: "left-0",
    slug: "popular",
  },
  {
    title: "Top Rated",
    classApply: "left-[25%]",
    slug: "top_rated",
  },
  {
    title: "Now Playing",
    classApply: "left-[75%]",
    slug: "now_playing",
  },
  {
    title: "Upcoming",
    classApply: "left-[50%]",
    slug: "upcoming",
  },
];
