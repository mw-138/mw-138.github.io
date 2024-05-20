"use client";

import { Projects } from "@/_data/Projects";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import Project, { Tag } from "../classes/Project";

type SortRadioProps = {
  index: number;
  label: string;
};

export const ProjectView = () => {
  const [sortIndex, setSortIndex] = useState<number>(0);

  function indexSort(index: number): void {
    setSortIndex(index);
  }

  const SortRadio = (props: SortRadioProps) => {
    return (
      <label className="flex gap-4" onClick={() => indexSort(props.index)}>
        <input
          type="radio"
          name={`radio-${props.index}`}
          className="radio"
          checked={sortIndex === props.index}
        />
        {props.label}
      </label>
    );
  };

  const filteredProjects = Projects.filter((project: Project) => {
    if (sortIndex === 0) {
      return true;
    } else if (sortIndex === 1) {
      return project.tags.includes(Tag.Game);
    } else if (sortIndex === 2) {
      return project.tags.includes(Tag.Software);
    }
  });

  return (
    <div className="bg-base-200">
      <div className="px-24 py-12 pb-0 flex gap-4 flex-col">
        Sort By Tag
        <form className="flex gap-4">
          <SortRadio index={0} label="All" />
          <SortRadio index={1} label="Games" />
          <SortRadio index={2} label="Software" />
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
