"use client";
import { useEffect, useState } from "react";
import CardTrailer from "./CardTrailer";
import {
  useGetSeriesTvQuery,
  useGetVideoByIdMutation,
} from "@/redux/services/series.service";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { motion } from "framer-motion";
import SkeletonTrailerCard from "./SkeletonTrailerCard";
import { SeriesTvGroupState } from "@/types/type-client-requets.";
import { setGroupSeriesTv } from "@/redux/slices/movieGroupSlice";
import DialogTrailler from "./DialogTrailler";
import { seriresTitleList } from "@/constants";
import { IVideo } from "@/types/type-server-response";

const TrailerSection = () => {
  const [slug, setSlug] = useState<SeriesTvGroupState>("popular");
  const [openDialog, setOpenDialog] = useState(false);
  const [video, setVideo] = useState<IVideo | undefined>(undefined);
  const dispath = useDispatch();
  const [bgImage, setBgImage] = useState("/banner/banner-1.jpg");
  const urlBanner = process.env.NEXT_PUBLIC_BASE_URL_IMAGE_BACKGROUND_API;
  const {
    movieGroup: { seriesTv },
  } = useSelector((state: RootState) => state);
  const { isLoading, data, refetch } = useGetSeriesTvQuery(seriesTv);
  const [getVideoById, { isLoading: isLoadingVideo }] =
    useGetVideoByIdMutation();

  const handleToggleSeries = (slugValue: SeriesTvGroupState) => {
    if (slug !== slugValue) {
      setSlug(slugValue);
      dispath(setGroupSeriesTv(slugValue));
      refetch();
    }
  };

  useEffect(() => {
    if (data) {
      setBgImage(urlBanner + data.results[0].backdrop_path);
    }
  }, [data, urlBanner]);

  const handleCardTrailerClick = async (id: number) => {
    console.log(id, "id");

    try {
      const result = await getVideoById(id);
      setVideo(result.data?.results[0])
    } catch (error) {
      console.error(error);
    }
    setOpenDialog(true);
  };

  // Handler to update the background image
  const handleMouseEnter = (imageUrl: string) => {
    setBgImage(imageUrl);
  };

  return (
    <div className="w-full overflow-hidden  mt-4">
      <motion.div
        className={`min-h-[340px] max-h-[340px] transition-all duration-400 delay-200 bg-no-repeat bg-center`}
        style={{
          backgroundImage: `url(${!isLoading && data && urlBanner + bgImage})`,
        }}
      >
        <div className="bg-wrapper-main min-h-[340px] max-h-[340px] flex flex-col  transition-bg duration-300 delay-200">
          <div className="flex items-center pl-12 gap-4 pt-4">
            <h1 className="text-white font-bold text-2xl">Latest Trailers</h1>
            <div
              className={`relative w-[30rem] h-8 flex items-center rounded-[30px] btn-group-secondary-custome`}
            >
              {seriresTitleList.map((item, index) => (
                <span
                  key={index}
                  onClick={() => handleToggleSeries(item.slug)}
                  className={`block ${
                    item.classApply
                  } cursor-pointer w-1/4 z-10 bottom-0 top-0 absolute transition-all text-white duration-200 ease-linear text-center translate-y-[6%] rounded-[30px] ${
                    slug === item.slug && "text-custom-secondary-active"
                  }`}
                >
                  {item.title}
                </span>
              ))}
              <span
                className={`absolute inset-0 btn-custom-active-secondary rounded-[30px] transition-all duration-150 ease-linear ${
                  slug == "top_rated"
                    ? "w-1/4 left-[25%]"
                    : slug == "upcoming"
                    ? "w-1/4 left-[50%]"
                    : slug == "now_playing"
                    ? "w-1/4 left-[75%]"
                    : "w-1/4 left-0"
                }`}
              ></span>
            </div>
          </div>

          <div className="scrollbar h-[200px] scrollbar-thin pl-12 mt-5 flex-1 grid gap-5 grid-flow-col overflow-x-scroll">
            {(isLoading || !data) &&
              [1, 2, 3, 4, 5].map((item) => <SkeletonTrailerCard key={item} />)}

            {!isLoading &&
              data &&
              data.results.map((item) => (
                <CardTrailer
                  onClick={handleCardTrailerClick}
                  onMouseEnter={() => handleMouseEnter(item.backdrop_path)}
                  key={item.id}
                  seriesTvItem={item}
                />
              ))}
          </div>
        </div>
      </motion.div>
      <DialogTrailler video={video} open={openDialog} setOpenDialog={setOpenDialog} />
    </div>
  );
};

export default TrailerSection;
