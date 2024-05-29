"use client";

import { Projects } from "@/data/Projects";
import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import { Tag } from "../classes/Project";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

enum SortByTag {
  All = "All",
  Game = "Game",
  Software = "Software",
  Website = "Website",
}

enum SortByDescriptor {
  Title = "Title",
  Date = "Date",
}

enum SortByOrder {
  Ascending = "Ascending",
  Descending = "Descending",
}

interface SortDropdownProps<T extends Record<string, unknown>> {
  tabIndex: number;
  label: string;
  options: T;
  selectedOption: T[keyof T];
  onSelect: (option: T[keyof T]) => void;
}

const SortDropdown = <T extends Record<string, unknown>>({
  tabIndex,
  label,
  options,
  selectedOption,
  onSelect,
}: SortDropdownProps<T>) => {
  return (
    <div className="dropdown">
      <div tabIndex={0} role="button" className="group btn m-1">
        {label}: {String(selectedOption)}
        <FaChevronDown className="group-focus:hidden" />
        <FaChevronUp className="hidden group-focus:block" />
      </div>
      <ul
        tabIndex={tabIndex}
        className="menu dropdown-content z-50 w-52 rounded-box bg-base-100 p-2 shadow"
      >
        {Object.values(options).map((option: any, index: number) => (
          <li key={index} onClick={() => onSelect(option)}>
            <a>{String(option)}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const ProjectsView = () => {
  const [sortByTag, setSortByTag] = useState<SortByTag>(SortByTag.All);
  const [sortByDescriptor, setSortByDescriptor] = useState<SortByDescriptor>(
    SortByDescriptor.Title,
  );
  const [sortByOrder, setSortByOrder] = useState<SortByOrder>(
    SortByOrder.Ascending,
  );
  const [searchFilter, setSearchFilter] = useState<string>("");

  const filteredProjects = Projects.filter((project) => {
    let filter = true;
    const isVisible = project.visible;

    if (sortByTag === SortByTag.Game) {
      filter = project.tags.includes(Tag.Game);
    } else if (sortByTag === SortByTag.Software) {
      filter = project.tags.includes(Tag.Software);
    } else if (sortByTag === SortByTag.Website) {
      filter = project.tags.includes(Tag.Website);
    }

    if (searchFilter !== "") {
      filter = project.title.toLowerCase().includes(searchFilter.toLowerCase());
    }

    return filter && isVisible;
  }).sort((a, b) => {
    let compareValue = 0;
    if (sortByDescriptor === SortByDescriptor.Title) {
      compareValue = a.title.localeCompare(b.title);
    } else if (sortByDescriptor === SortByDescriptor.Date) {
      compareValue = a.publishDate.getTime() - b.publishDate.getTime();
    }
    return sortByOrder === SortByOrder.Ascending ? compareValue : -compareValue;
  });

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSearchFilter(event.target.value);
  };

  return (
    <div className="bg-base-200">
      <div className="flex flex-col items-center justify-between gap-4 px-24 py-12 pb-0 lg:flex-row">
        <div>
          <SortDropdown
            tabIndex={0}
            label="Tag"
            options={SortByTag}
            selectedOption={sortByTag}
            onSelect={setSortByTag}
          />
          <SortDropdown
            tabIndex={1}
            label="Descriptor"
            options={SortByDescriptor}
            selectedOption={sortByDescriptor}
            onSelect={setSortByDescriptor}
          />
          <SortDropdown
            tabIndex={2}
            label="Order"
            options={SortByOrder}
            selectedOption={sortByOrder}
            onSelect={setSortByOrder}
          />
        </div>
        <input
          type="text"
          placeholder="Enter project title..."
          className="w-full rounded-md p-2 lg:w-1/2"
          onChange={handleSearchInputChange}
        />
      </div>
      <div className="grid place-content-center place-items-center gap-10 p-20 pt-10 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};
