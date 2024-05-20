"use client";

import { Projects } from "@/_data/Projects";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { Tag } from "../classes/Project";

enum SortBy {
  All = "All",
  Game = "Game",
  Software = "Software",
}

type SortRadioProps = {
  sortBy: SortBy;
};

export const ProjectsView = () => {
  const [sortBy, setSortBy] = useState<SortBy>(SortBy.All);

  const SortRadio = (props: SortRadioProps) => {
    return (
      <label className="flex gap-4" onClick={() => setSortBy(props.sortBy)}>
        <input
          type="radio"
          name={`radio-${props.sortBy}`}
          className="radio"
          checked={sortBy === props.sortBy}
        />
        {props.sortBy}
      </label>
    );
  };

  const filteredProjects = Projects.filter((project) => {
    switch (sortBy) {
      case SortBy.Game:
        return project.tags.includes(Tag.Game);
      case SortBy.Software:
        return project.tags.includes(Tag.Software);
      default:
        return true;
    }
  });

  return (
    <div className="bg-base-200">
      <div className="px-24 py-12 pb-0 flex gap-4 flex-col">
        Sort By Tag
        <form className="flex gap-4">
          {Object.values(SortBy).map((sortOption, index) => (
            <SortRadio key={index} sortBy={sortOption} />
          ))}
        </form>
      </div>
      <div className="grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 place-items-center place-content-center gap-10 p-20 pt-10">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};
