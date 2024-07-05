import { Search } from "lucide-react";

const SearchItemTrending = () => {
  return (
    <div className="w-full bg-[#FFFF] border cursor-pointer hover:bg-[#F7F7F7] transition-colors border-[#dadada] border-l-0 border-t-0 border-r-0 space-x-3 search-custom flex h-9 items-center">
      <div className="flex items-center justify-center">
        <Search color="#333" size={18} strokeWidth={1} />
      </div>
      <span className="font-normal text-black text-base capitalize">
        Insise out 2
      </span>
    </div>
  );
};

export default SearchItemTrending;
