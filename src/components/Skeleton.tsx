import Image from "next/image";
import { Skeleton } from "./ui/skeleton";

const SkeletonCustom = () => {
  return (
    <Skeleton className="w-[150px] transition-opacity duration-1000 min-h-[250px] opacity-80 rounded-[8px] flex items-center justify-center">
      <div className="min-h-[80%] max-h-[80%] w-full relative rounded-[8px] flex items-center justify-center px-3">
        <Image
          className="rounded-[8px] block w-full h-full opacity-40"
          src={"/sekeleton/bg.svg"}
          alt="trending"
          width={500}
          height={500}
          objectFit="cover"
        />
      </div>
      <div className="w-10 h-10 absolute bottom-0 left-3 z-10 translate-y-1/2 rounded-full bg-[#696969] flex items-center justify-center font-bold text-xl text-center text-[#999]">
        NV
      </div>
    </Skeleton>
  );
};

export default SkeletonCustom;
