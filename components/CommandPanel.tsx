"use client";

import {
  Book,
  Code,
  ComputerIcon,
  FolderOpenDot,
  GamepadIcon,
  Home,
  Info,
  LucideIcon,
  Moon,
  PanelsTopLeft,
  SearchIcon,
  Sun,
  User,
} from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { EnabledProjects } from "@/data/Projects";
import Project, { Tag } from "@/data/classes/Project";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

interface CommandOption {
  label: string;
  type: "link" | "action";
  icon: LucideIcon;
  href?: string;
  action?: () => void;
}

interface CommandSection {
  title: string;
  options: CommandOption[];
}

function getProjectIcon(project: Project): LucideIcon {
  if (project.tags.includes(Tag.Game)) {
    return GamepadIcon;
  } else if (project.tags.includes(Tag.Software)) {
    return ComputerIcon;
  } else if (project.tags.includes(Tag.Website)) {
    return PanelsTopLeft;
  }
  return User;
}

function generateProjects(): any[] {
  const projects: any[] = [];
  EnabledProjects.map((project) => {
    projects.push(
      {
        label: `${project.title} (Overview)`,
        type: "link",
        href: `/projects/${project.id}`,
        icon: getProjectIcon(project),
      },
      {
        label: project.title,
        type: "link",
        href: project.pageUrl,
        icon: getProjectIcon(project),
      },
    );
  });
  return projects;
}

export function CommandPanel() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { setTheme } = useTheme();

  const commands: CommandSection[] = [
    {
      title: "Suggestions",
      options: [
        {
          label: "Home",
          type: "link",
          href: "/",
          icon: Home,
        },
        {
          label: "About",
          type: "link",
          href: "/about",
          icon: Info,
        },
        {
          label: "Projects",
          type: "link",
          href: "/projects",
          icon: FolderOpenDot,
        },
      ],
    },
    {
      title: "About",
      options: [
        {
          label: "Introduction",
          type: "link",
          href: "/about#about_me",
          icon: User,
        },
        {
          label: "Education",
          type: "link",
          href: "/about#education",
          icon: Book,
        },
        {
          label: "Technical Skills",
          type: "link",
          href: "/about#technical_skills",
          icon: Code,
        },
      ],
    },
    {
      title: "Projects",
      options: [
        // {
        //   label: "Game Development",
        //   href: "/projects",
        //   icon: FolderOpenDot,
        // },
        // {
        //   label: "Web Development",
        //   href: "/projects",
        //   icon: FolderOpenDot,
        // },
        // {
        //   label: "Software Development",
        //   href: "/projects",
        //   icon: FolderOpenDot,
        // },
        ...generateProjects(),
      ],
    },
    {
      title: "Theme",
      options: [
        {
          label: "Light",
          type: "action",
          icon: Sun,
          action: () => setTheme("light"),
        },
        {
          label: "Dark",
          type: "action",
          icon: Moon,
          action: () => setTheme("dark"),
        },
        {
          label: "System",
          type: "action",
          icon: FolderOpenDot,
          action: () => setTheme("system"),
        },
      ],
    },
  ];

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "j" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <Button
        className="flex flex-row gap-2"
        variant="outline"
        onClick={() => setOpen(true)}
      >
        <SearchIcon size={16} />
        Search
        <Separator orientation="vertical" />
        <span>⌘</span>J
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {commands.map((command, commandIndex) => (
            <Fragment key={commandIndex}>
              <CommandGroup heading={command.title}>
                {command.options.map((option, optionIndex) => {
                  return option.type === "link" ? (
                    <Link key={optionIndex} href={option.href ?? "/"}>
                      <CommandItem
                        onSelect={() => {
                          router.push(option.href ?? "/");
                          setOpen(false);
                        }}
                      >
                        <option.icon className="mr-2 h-4 w-4" />
                        <span>{option.label}</span>
                      </CommandItem>
                    </Link>
                  ) : (
                    <CommandItem
                      key={optionIndex}
                      onSelect={() => {
                        if (option.action) {
                          option.action();
                        }
                        setOpen(false);
                      }}
                    >
                      <option.icon className="mr-2 h-4 w-4" />
                      <span>{option.label}</span>
                    </CommandItem>
                  );
                })}
              </CommandGroup>
              <CommandSeparator />
            </Fragment>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  );
}
