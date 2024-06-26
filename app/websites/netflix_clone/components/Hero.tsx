"use client";

import Link from "next/link";
import { Movie, getMoviePosterUrl } from "../dataFetching";

type HeroProps = {
  movie: Movie;
};

const Hero = ({ movie }: HeroProps) => {
  return (
    <div
      className="relative h-screen bg-cover bg-center bg-no-repeat p-5"
      style={{
        backgroundImage: `url('${getMoviePosterUrl(movie)}')`,
      }}
    >
      <div className="absolute bottom-0 left-0 h-full w-full bg-gradient-to-b from-transparent to-black" />
      <div className="absolute bottom-0 left-0 right-0 flex max-h-64 flex-col gap-4 rounded-md bg-black/20 p-5 text-white backdrop-blur-md lg:bottom-40 lg:left-40 lg:right-40 lg:w-96">
        <h1 className="text-xl font-bold">{movie.title}</h1>
        <p className="text-md line-clamp-3 sm:line-clamp-6">{movie.overview}</p>
        <div className="flex gap-4">
          <button className="rounded-md bg-white px-4 py-2 text-black transition-all hover:bg-gray-200">
            Play
          </button>
          <Link href={`/websites/netflix_clone/${movie.id}`}>
            <button className="rounded-md bg-gray-500/50 px-4 py-2 text-white transition-all hover:bg-gray-500/20">
              More Info
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
