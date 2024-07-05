import Banner from "@/components/Banner";
import MovieListType from "@/components/MovieListType";
import TrailerSection from "@/components/TrailerSection";
import { MovieListTileType } from "@/types";

export default function Home() {
  return (
    <main className="scrollbar scrollbar-thin scrollbar-thumb-rose-500 scrollbar-track-sky-300 overflow-y-auto flex min-h-screen flex-col">
      <Banner />
      <MovieListType type={MovieListTileType.TRENDING} />
      <TrailerSection />
      <MovieListType type={MovieListTileType.POPULAR} />
    </main>
  );
}
