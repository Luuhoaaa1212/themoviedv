"use client";

import { useEffect, useRef, useState } from "react";
import CardMovie from "./CardMovie";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination } from "swiper/modules";
import { MovieListTileType } from "@/types";
import { sliderSettings } from "@/constants";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { useGetMovieTopQuery } from "@/redux/services/movie.service";
import { MovieGroupState } from "@/types/type-client-requets.";
import { setGroupTrending } from "@/redux/slices/movieGroupSlice";
import SkeletonCustom from "./Skeleton";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useGetPeoplePopularQuery } from "@/redux/services/people.service";
interface IProps {
  type: MovieListTileType;
}

const MovieListType = ({ type }: IProps) => {
  const dispatch = useDispatch();
  const {
    movieGroup: { trending },
  } = useSelector((state: RootState) => state);
  const sliderRef: any = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [realIndex, setIndex] = useState(0);
  const [isEnd, setIsEnd] = useState(false);

  const {
    data: dataTrending,
    isLoading: isLoadingTrending,
    refetch: refetchTrending,
  } = useGetMovieTopQuery(trending, {
    skip: type !== "trending",
  });
  const { data: dataPopular, isLoading: isLoadingPopular } =
    useGetPeoplePopularQuery(undefined, {
      skip: type === "trending",
    });

  const handleDispathStatus = (movieGroup: MovieGroupState) => {
    dispatch(setGroupTrending(movieGroup));
    refetchTrending();
  };

  const handleToggleToday = () => {
    if (trending === "week") {
      handleDispathStatus("day");
    }
  };

  const handleToggleWeek = () => {
    if (trending === "day") {
      handleDispathStatus("week");
    }
  };

  return (
    <div className="min-h-[430px] w-full">
      <div className="flex items-center pl-12 gap-4 py-10 ">
        <h1 className="text-black capitalize font-bold text-2xl">
          {type == "trending" ? type : "What'Popular"}
        </h1>

        {type == "trending" && (
          <div
            className={`relative w-48 h-8 flex items-center rounded-[30px] btn-group-main-custome-main`}
          >
            <span
              onClick={handleToggleToday}
              className={`block cursor-pointer w-2/5 left-0 z-10 bottom-0 top-0 absolute transition-all duration-200 ease-linear text-center translate-y-[6%] rounded-[30px] ${
                trending === "day" && "text-custom-active"
              }`}
            >
              Today
            </span>
            <span
              onClick={handleToggleWeek}
              className={`block cursor-pointer w-3/5 z-30 left-[40%] absolute right-0 top-0 bottom-0 transition-all duration-200 ease-linear translate-y-[6%] text-center rounded-[30px] ${
                trending === "week" && "text-custom-active"
              }`}
            >
              This Week
            </span>
            <span
              className={`absolute inset-0 btn-custom-active rounded-[30px] transition-all duration-150 ease-linear ${
                trending !== "day" ? "w-3/5 left-[40%]" : "w-2/5 left-0"
              }`}
            ></span>
          </div>
        )}

        {type !== "trending" && (
          <span className="px-3 py-2 btn-custom-active text-white rounded-[8px] cursor-pointer">
            People
          </span>
        )}
      </div>

      <div className="size-full bg-[url('/trending/bg.svg')] bg-no-repeat bg-bottom">
        <div className="relative group parent mt-7">
          <Button
            variant="outline"
            className="left-0 -translate-y-[calc(-100%+95px)] absolute z-10"
            size="icon"
            ref={prevRef}
            disabled={realIndex == 0}
            onClick={() => {
              setIndex(sliderRef.current?.swiper.realIndex);
              setIsEnd(sliderRef.current?.swiper.isEnd);
            }}
          >
            <ChevronLeft />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="left-14 -translate-y-[calc(-100%+95px)] absolute z-10"
            ref={nextRef}
            disabled={isEnd}
            onClick={() => {
              setIndex(sliderRef.current?.swiper.realIndex);
              setIsEnd(sliderRef.current?.swiper.isEnd);
            }}
          >
            <ChevronRight />
          </Button>

          <Swiper
            ref={sliderRef}
            onInit={(swiper: any) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            breakpoints={sliderSettings}
            freeMode={true}
            modules={[FreeMode, Pagination, Navigation]}
            className="mySwiper relative pr-20"
          >
            {(isLoadingTrending && !dataTrending) ||
              (isLoadingPopular &&
                !dataPopular &&
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
                  <SwiperSlide
                    className={`${index == 0 && "ml-14"}`}
                    key={item}
                  >
                    <SkeletonCustom />
                  </SwiperSlide>
                )))}

            {!isLoadingTrending &&
              dataTrending &&
              dataTrending.results.map((item, index) => (
                <SwiperSlide
                  className={`${
                    (index == 0 && "ml-14") ||
                    (dataTrending.results.length - 1 == index && "mr-14")
                  } w-[150px] min-h-[340px]`}
                  key={item.id}
                >
                  <CardMovie type={'trending'} movieItem={item} />
                </SwiperSlide>
              ))}

            {!isLoadingPopular &&
              dataPopular &&
              dataPopular.results.map((item, index) => (
                <SwiperSlide
                  className={`${
                    (index == 0 && "ml-14") ||
                    (dataPopular.results.length - 1 == index && "mr-14")
                  } w-[150px] min-h-[340px]`}
                  key={item.id}
                >
                  <CardMovie  type={'popular'}movieItem={item} />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default MovieListType;
