"use client";

import { Tag } from "@/data/classes/Project";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProjectCard from "@/components/ProjectCard";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Projects } from "@/data/Projects";
import { useState } from "react";

enum SortByTag {
  All = "All",
  Game = "Game",
  Software = "Software",
  Website = "Website",
  WorkInProgress = "Work In Progress",
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
  label: string;
  options: T;
  selectedOption: T[keyof T];
  onSelect: (option: T[keyof T]) => void;
}

const SortDropdown = <T extends Record<string, unknown>>({
  label,
  options,
  selectedOption,
  onSelect,
}: SortDropdownProps<T>) => {
  return (
    <Select onValueChange={(e: any) => onSelect(e)}>
      <SelectTrigger className="md:w-44">
        <SelectValue placeholder={String(selectedOption)} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{label}</SelectLabel>
          {Object.values(options).map((option: any, index: number) => {
            const stringOption = String(option);
            return (
              <SelectItem key={index} value={stringOption}>
                {stringOption}
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
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
    } else if (sortByTag === SortByTag.WorkInProgress) {
      filter = project.tags.includes(Tag.WorkInProgress);
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
    <MaxWidthWrapper>
      <div className="flex flex-col items-center justify-between gap-4 py-5 sm:flex-row">
        <div className="flex flex-row gap-4">
          <SortDropdown
            label="Tag"
            options={SortByTag}
            selectedOption={sortByTag}
            onSelect={setSortByTag}
          />
          <SortDropdown
            label="Descriptor"
            options={SortByDescriptor}
            selectedOption={sortByDescriptor}
            onSelect={setSortByDescriptor}
          />
          <SortDropdown
            label="Order"
            options={SortByOrder}
            selectedOption={sortByOrder}
            onSelect={setSortByOrder}
          />
        </div>
        <Input
          type="text"
          placeholder="Search"
          onChange={handleSearchInputChange}
        />
      </div>
      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </MaxWidthWrapper>
  );
};
