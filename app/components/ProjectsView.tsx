"use client";

import { Projects } from "@/data/Projects";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { Tag } from "../classes/Project";

enum SortBy {
  All = "All",
  Game = "Game",
  Software = "Software",
  Website = "Website",
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
      case SortBy.Website:
        return project.tags.includes(Tag.Website);
      default:
        return true;
    }
  }).filter((project) => project.visible);

  return (
    <div className="bg-base-200">
      <div className="flex flex-col gap-4 px-24 py-12 pb-0">
        <span>Sort By Tag</span>
        <form className="flex flex-col gap-4 sm:flex-row">
          {Object.values(SortBy).map((sortOption, index) => (
            <SortRadio key={index} sortBy={sortOption} />
          ))}
        </form>
      </div>
      <div className="grid place-content-center place-items-center gap-10 p-20 pt-10 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};
