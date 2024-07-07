"use client";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { Navigation } from "./Navigation";
import Image from "next/image";
import Link from "next/link";
import { Moon, Search, Sun, TrendingUp, X } from "lucide-react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import SearchItemTrending from "./SearchItemTrending";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const Header = () => {
  const { scrollY } = useScroll();
  const { setTheme } = useTheme();
  const [hidden, setHidden] = useState(false);
  const [hiddenSearch, setHiddenSearch] = useState(false);

  useMotionValueEvent(scrollY, "change", (laster) => {
    const previus = scrollY.getPrevious()!;
    if (laster > previus && laster > 64) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.25, ease: "easeIn", delay: 0.1 }}
      className="header-custom"
    >
      <div className="nav-custom">
        <div className="flex items-center gap-10">
          <Image src={"/logo.svg"} width={160} height={160} alt="logo image" />
          <Navigation />
        </div>
        <div className="flex items-center gap-7">
          <Link className="font-semibold hover:text-primary" href={""}>
            Login
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="bg-transparent border-none outline-none hover:bg-transparent focus:border-none active:border-none active:outline-none active:ring-0 text-white"
                size="icon"
              >
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {!hiddenSearch && (
            <div
              onClick={() => setHiddenSearch(true)}
              className="flex cursor-pointer items-center justify-center p-2"
            >
              <Search strokeWidth={3} />
            </div>
          )}
          {hiddenSearch && (
            <div
              onClick={() => setHiddenSearch(false)}
              className="flex cursor-pointer items-center justify-center p-2"
            >
              <X strokeWidth={3} />
            </div>
          )}
        </div>
      </div>
      {hiddenSearch && (
        <div className="">
          <div className="w-full sticky search-custom mt-3 bg-[#ffff]">
            <div className="flex h-11 items-center">
              <div className="flex cursor-text items-center justify-center">
                <Search color="#333" strokeWidth={2} />
              </div>
              <input
                type="text"
                placeholder="Search for movies, tv shows, genres and more"
                className="w-full indent-0 h-full p-3 text-base font-normal border-none outline-none text-black text-opacity-50"
              />
              <div className="flex cursor-pointer items-center justify-center hover:opacity-75 transition-all">
                <X color="#333" strokeWidth={2} />
              </div>
            </div>
          </div>

          <div className="w-full bg-[#F7F7F7] border border-[#dadada] border-l-0 border-r-0  space-x-3 search-custom flex h-11 items-center">
            <div className="flex cursor-text items-center justify-center">
              <TrendingUp color="#333" strokeWidth={3} />
            </div>
            <h2 className="font-bold text-black text-xl ">Trending</h2>
          </div>

          {/* list item search */}
          <SearchItemTrending />
          <SearchItemTrending />
          <SearchItemTrending />
          <SearchItemTrending />
          <SearchItemTrending />
        </div>
      )}
    </motion.nav>
  );
};

export default Header;
