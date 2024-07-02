"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  FaHeart,
  FaRegHeart,
  FaPlay,
  FaPlus,
  FaStar,
  FaStarHalf,
} from "react-icons/fa";
import { Movie, getMovieBackdropUrl } from "../dataFetching";
import Link from "next/link";

type MovieCardProps = {
  movie: Movie;
};

const MovieCard = ({ movie }: MovieCardProps) => {
  const [like, setLike] = useState<boolean>(false);

  const toggleLike = () => {
    setLike(!like);
  };

  const fullStars = Math.floor(movie.vote_average / 2);
  const hasHalfStar = movie.vote_average % 2 !== 0;

  return (
    <Link href={`/websites/netflix_clone/${movie.id}`}>
      <div className="group/card relative m-2 ml-0 inline-block w-[160px] cursor-pointer overflow-hidden rounded-md first:ml-2 sm:w-[200px] md:w-[240px] lg:w-[280px]">
        <Image
          src={`${getMovieBackdropUrl(movie, "w500")}`}
          width={0}
          height={0}
          alt={movie.title}
          className="block h-auto w-full"
        />
        <div className="absolute left-0 top-0 h-full w-full text-white opacity-100 transition-opacity group-hover/card:bg-black/40 group-hover/card:opacity-100 group-hover/card:backdrop-blur-sm">
          <p className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-2 text-sm font-bold group-hover/card:hidden">
            {movie.title}
          </p>
          <div className="absolute bottom-0 left-0 flex h-full w-full translate-y-full items-center justify-center bg-black/50 text-xs font-bold text-white backdrop-blur-sm transition-transform group-hover/card:translate-y-0">
            <div className="absolute bottom-0 left-0 w-full">
              <p className="flex bg-white/10 p-2">{movie.title}</p>
              <p className="flex items-center justify-start gap-4 bg-white/10 p-2">
                <FaPlay className="rounded-full bg-white p-2 text-3xl text-black hover:bg-zinc-300" />
                <FaPlus className="rounded-full border-2 border-white bg-zinc-800 p-2 text-3xl text-white hover:bg-white hover:text-zinc-500" />
                {like ? (
                  <FaHeart
                    onClick={toggleLike}
                    className="rounded-full border-2 border-white bg-zinc-800 p-2 text-3xl text-white hover:bg-white hover:text-zinc-500"
                  />
                ) : (
                  <FaRegHeart
                    onClick={toggleLike}
                    className="rounded-full border-2 border-white bg-zinc-800 p-2 text-3xl text-white hover:bg-white hover:text-zinc-500"
                  />
                )}
              </p>
            </div>
            <p className="absolute right-0 top-0 bg-white/0 p-2">
              {movie.release_date}
            </p>
            {movie.vote_average !== 0 && (
              <p className="absolute left-0 top-0 flex items-center bg-white/0 p-2">
                {Array.from({ length: fullStars }, (_, index) => (
                  <FaStar key={index} className="text-yellow-500" />
                ))}
                {hasHalfStar && <FaStarHalf className="text-yellow-500" />}
                <span className="ml-2">{movie.vote_average}/10</span>
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
