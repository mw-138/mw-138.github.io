"use client";

import React from "react";
import MovieCard from "./MovieCard";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Movie } from "../data_fetching";

type MovieRowProps = {
  rowId: number;
  title: string;
  movies: Movie[];
};

const MovieRow = ({ rowId, title, movies }: MovieRowProps) => {
  const slideLeft = () => {
    const slider = document.getElementById(`slider${rowId}`);
    if (!slider) return;
    slider.scrollLeft = slider?.scrollLeft - 500;
  };

  const slideRight = () => {
    const slider = document.getElementById(`slider${rowId}`);
    if (!slider) return;
    slider.scrollLeft = slider?.scrollLeft + 500;
  };

  return (
    <div className="m-4">
      <h2 className="p-2 font-bold text-white md:text-xl">{title}</h2>
      <div className="group/row relative flex items-center">
        <MdChevronLeft
          className="absolute left-0 z-10 hidden cursor-pointer rounded-full bg-white opacity-50 hover:opacity-100 group-hover/row:block"
          size={40}
          onClick={slideLeft}
        />
        <div
          id={`slider${rowId}`}
          className="no-scrollbar h-full w-full overflow-x-scroll scroll-smooth whitespace-nowrap"
        >
          {movies.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </div>
        <MdChevronRight
          className="absolute right-0 z-10 hidden cursor-pointer rounded-full bg-white opacity-50 hover:opacity-100 group-hover/row:block"
          size={40}
          onClick={slideRight}
        />
      </div>
    </div>
  );
};

export default MovieRow;
