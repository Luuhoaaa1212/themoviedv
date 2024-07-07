"use client";
import {
  IresultTypeMovie,
  IresultTypePeople,
} from "@/types/type-server-response";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { SwiperSlide } from "swiper/react";

interface Iprops {
  movieItem: IresultTypeMovie | IresultTypePeople;
  type: "trending" | "popular";
}

const CardMovie = ({ movieItem, type }: Iprops) => {
  return (
    <SwiperSlide>
      <AnimatePresence mode="wait">
        <motion.div
          layout
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            opacity: { ease: "linear" },
            layout: { duration: 1.2 },
          }}
          className="w-[150px] min-h-[340px] rounded-[8px] overflow-hidden"
        >
          <Link
            href={""}
            className="w-full hover:scale-105 transition-all duration-200 block relative rounded-[8px] min-h-[70%] max-h-[70%]"
          >
            <Image
              className="rounded-[8px] size-full"
              src={
                (type =="trending"
                  ? process.env.NEXT_PUBLIC_BASE_URL_IMAGE_API +
                    (movieItem as IresultTypeMovie).poster_path
                  : process.env.NEXT_PUBLIC_BASE_URL_IMAGE_API_PEOPLE +
                    (movieItem as IresultTypePeople).profile_path)
              }
              alt="trending"
              width={1000}
              height={1000}
              objectFit="cover"
            />
            <div className="w-10 h-10 absolute bottom-0 left-3 translate-y-1/2 rounded-full bg-black flex items-center justify-center">
              <div className="relative w-full h-full">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle
                    className="text-gray-200 stroke-current"
                    strokeWidth="6"
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                  ></circle>
                  <circle
                    className="text-indigo-500 progress-ring__circle stroke-current"
                    strokeWidth="6"
                    strokeLinecap="round"
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    strokeDasharray="100"
                    strokeDashoffset="200"
                  ></circle>

                  <text
                    x="50"
                    y="50"
                    fontFamily="Verdana"
                    fontSize="16"
                    fill="#ffff"
                    fontWeight={600}
                    textAnchor="middle"
                    alignmentBaseline="middle"
                    className="text-white"
                  >
                    100%
                  </text>
                </svg>
              </div>
            </div>
          </Link>
          <div className="mt-7 pl-2">
            <Link
              className="block leading-5 font-bold text-base hover:text-primary text-wrap"
              href={""}
            >
              {(movieItem as IresultTypeMovie).title ||
                (movieItem as IresultTypePeople).name}
            </Link>
            <span className="text-[#333] font-light text-base">
              {(movieItem as IresultTypeMovie).release_date ||
                (movieItem as IresultTypePeople).popularity}
            </span>
          </div>
        </motion.div>
      </AnimatePresence>
    </SwiperSlide>
  );
};

export default CardMovie;
