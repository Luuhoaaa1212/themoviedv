import Image from "next/image";
import PopoverTrailer from "./PopoverTrailer";
import { IresultTypeMovie } from "@/types/type-server-response";

interface Iprops {
  seriesTvItem: IresultTypeMovie;
  onMouseEnter: () => void;
  onClick: (id:number) => void;
}

const CardTrailer = ({ seriesTvItem, onMouseEnter, onClick }: Iprops) => {

  const { backdrop_path, title,id } = seriesTvItem;

  return (
    <div className="w-[300px] h-[200px] col-span-1 pt-2">
      <div
        onMouseEnter={onMouseEnter}
        className="min-w-full group hover:scale-[1.07] transition-all cursor-pointer duration-500 relative"
      >
        <Image
          className="rounded-[10px]"
          src={process.env.NEXT_PUBLIC_BASE_URL_IMAGE_API + backdrop_path}
          alt="trending"
          width={1500}
          height={1500}
          objectFit="cover"
        />
        {backdrop_path && (
          <Image
            onClick={()=> onClick(id)}
            className="absolute group-hover:scale-[1.3] transition-all duration-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            src={"/play-solid.svg"}
            alt={"play"}
            width={32}
            color="white"
            height={32}
          />
        )}
        {backdrop_path && <PopoverTrailer />}
      </div>
      <div className="flex mt-2 flex-col items-center justify-center text-white">
        <h3 className="text-lg font-semibold leading-7">{title}</h3>
      </div>
    </div>
  );
};

export default CardTrailer;
