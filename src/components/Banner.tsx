import { randomImageBanner } from "@/lib/utils";
import Image from "next/image";

const Banner = () => {
  return (
    <section className="h-[300px] w-full relative -z-[1]">
      <Image
        src={randomImageBanner()}
        layout="fill"
        objectFit="cover"
        alt="banner image"
      />
      <div className="absolute top-1/4 z-[100] left-0 right-0 space-y-10 px-12 text-[#ffffff]">
        <div>
          <h2 className="capitalize font-extrabold text-5xl">welcome</h2>
          <h3 className="font-bold text-3xl">
            Millions of movies, TV shows and people to discover. Explore now.
          </h3>
        </div>
        <div className="min-w-full bg-white h-12 z-10 relative rounded-[30px] overflow-hidden">
          <input
            className="size-full bg-transparent leading-[48px] block px-5 py-[10px] input-custom"
            type="text"
            placeholder="Search for a movie, Tv Shows, Person"
          />
          <button className="absolute cursor-pointer hover:text-primary-foreground right-0 top-0 bottom-0 btn-custom">
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
