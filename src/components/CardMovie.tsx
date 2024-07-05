import Image from "next/image";
import Link from "next/link";

const CardMovie = () => {
  return (
    <div className="w-[150px] min-h-[340px]">
      <div className="w-full relative rounded-[8px] h-80%">
        <Image
          className="rounded-[8px]"
          src="/example/sp.webp"
          alt="trending"
          width={1500}
          height={1500}
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
                className="text-indigo-500  progress-ring__circle stroke-current"
               strokeWidth="6"
                strokeLinecap="round"
                cx="50"
                cy="50"
                r="40"
                fill="transparent"
                strokeDasharray="251.2"
                strokeDashoffset="calc(251.2 - (251.2 * 70) / 100)"
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
      </div>
      <div className="mt-7 pl-2">
        <Link className="block leading-5 font-bold text-base hover:text-primary text-wrap" href={""}>The Boys</Link>
        <span className="text-[#333] font-light text-base">Jul 03, 2024</span>
      </div>
    </div>
  );
};

export default CardMovie;
