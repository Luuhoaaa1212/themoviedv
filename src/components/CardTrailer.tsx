import { Ellipsis } from "lucide-react";
import Image from "next/image";
import PopoverTrailer from "./PopoverTrailer";

const CardTrailer = () => {
  return (
    <div className="w-[300px] col-span-1 h-[85%] pt-2">
      <div className="min-w-full group hover:scale-[1.07] transition-all cursor-pointer duration-200 relative max-h-[85%] min-h-[85%]">
        <Image
          className="rounded-[10px]"
          src="/example/trailer.webp"
          alt="trending"
          width={1500}
          height={1500}
          objectFit="cover"
        />
        <Image
          className="absolute group-hover:scale-[1.3] transition-all duration-200 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          src={"/play-solid.svg"}
          alt={"play"}
          width={32}
          color="white"
          height={32}
        />
        <PopoverTrailer />
      </div>
      <div className="flex mt-2 flex-col items-center justify-center text-white">
        <h3 className="text-lg font-semibold leading-3">Ưu tú</h3>
        <span className="block leading-7">Teaser Trailer chính thức</span>
      </div>
    </div>
  );
};

export default CardTrailer;
