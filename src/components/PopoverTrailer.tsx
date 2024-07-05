import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Ellipsis } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faHeart,
  faList,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
const PopoverTrailer = () => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div className="absolute hover:bg-green-500 right-3 top-3 p-1 bg-slate-400 flex items-center justify-center rounded-full">
          <Ellipsis size={12} />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-36 p-0 rounded-[8px]">
        <ul className="min-w-full flex flex-col py-1">
          <li className="flex cursor-pointer justify-start w-full border-solid border-b-[1px] border-b-[#696969] border-opacity-30 group items-center pl-5 gap-2 pr-2 py-2 duration-300 hover:bg-slate-800">
            <FontAwesomeIcon
              size="1x"
              className="p-1"
              color="#696969"
              icon={faList}
            />
            <span className="text-sm group-hover:text-white transition-colors">
              Add list
            </span>
          </li>
          <li className="flex cursor-pointer justify-start w-full border-solid border-b-[1px] border-b-[#696969] border-opacity-30 group items-center pl-5 gap-2 pr-2 py-2 duration-300 hover:bg-slate-800">
            <FontAwesomeIcon
              size="1x"
              className="p-1"
              color="#696969"
              icon={faHeart}
            />
            <span className="text-sm group-hover:text-white transition-colors">
              Favorite
            </span>
          </li>
          <li className="flex cursor-pointer justify-start w-full border-solid border-b-[1px] border-b-[#696969] border-opacity-30 group items-center pl-5 gap-2 pr-2 py-2 duration-300 hover:bg-slate-800">
            <FontAwesomeIcon
              size="1x"
              className="p-1"
              color="#696969"
              icon={faBookmark}
            />
            <span className="text-sm group-hover:text-white transition-colors">
              watchlist
            </span>
          </li>
          <li className="flex -ml-[3px] cursor-pointer justify-start w-full border-solid border-b-[1px] border-b-[#696969] border-opacity-30 pr-2 group items-center pl-5 gap-2 py-2 duration-300 hover:bg-slate-800">
            <FontAwesomeIcon
              size="1x"
              className="p-1"
              color="#696969"
              icon={faStar}
            />
            <span className="text-sm group-hover:text-white transition-colors">
              Your rating
            </span>
          </li>
        </ul>
      </PopoverContent>
    </Popover>
  );
};

export default PopoverTrailer;
