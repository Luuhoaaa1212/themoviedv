import Image from "next/image";
import { Skeleton } from "./ui/skeleton";

const SkeletonTrailerCard = () => {
  return (
    <Skeleton className="w-[300px] rounded-[10px] col-span-1 h-[90%] pb-10 pt-2">
      <div className="min-w-full group hover:scale-[1.07] flex items-center justify-center transition-all cursor-pointer duration-500 relative max-h-[100%] min-h-[100%]">
        <Image
          className="rounded-[10px] w-1/2 h-auto"
          src={"/sekeleton/bg.svg"}
          alt="skeleton series tv item"
          width={200}
          height={200}
          objectFit="cover"
        />
      </div>
    </Skeleton>
  );
};

export default SkeletonTrailerCard;
