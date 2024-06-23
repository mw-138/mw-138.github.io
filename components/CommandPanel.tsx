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
  PanelsTopLeft,
  SearchIcon,
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
  CommandShortcut,
} from "@/components/ui/command";
import { Projects } from "@/data/Projects";
import Project, { Tag } from "@/data/classes/Project";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

interface CommandLink {
  label: string;
  href: string;
  icon: LucideIcon;
  shortcut?: string;
}

interface CommandSection {
  title: string;
  links: CommandLink[];
}

const commands: CommandSection[] = [
  {
    title: "Suggestions",
    links: [
      {
        label: "Home",
        href: "/",
        icon: Home,
      },
      {
        label: "About",
        href: "/about",
        icon: Info,
      },
      {
        label: "Projects",
        href: "/projects",
        icon: FolderOpenDot,
      },
    ],
  },
  {
    title: "About",
    links: [
      {
        label: "Introduction",
        href: "/about#about_me",
        icon: User,
      },
      {
        label: "Education",
        href: "/about#education",
        icon: Book,
      },
      {
        label: "Technical Skills",
        href: "/about#technical_skills",
        icon: Code,
      },
    ],
  },
  {
    title: "Projects",
    links: [
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
];

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
  Projects.map((project) => {
    projects.push(
      {
        label: `${project.title} (Overview)`,
        href: `/projects/${project.id}`,
        icon: getProjectIcon(project),
      },
      {
        label: project.title,
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
            <>
              <CommandGroup key={commandIndex} heading={command.title}>
                {command.links.map((link, linkIndex) => (
                  <Link key={linkIndex} href={link.href}>
                    <CommandItem onSelect={() => router.push(link.href)}>
                      <link.icon className="mr-2 h-4 w-4" />
                      <span>{link.label}</span>
                      {link.shortcut && (
                        <CommandShortcut className="uppercase">
                          ⌘{link.shortcut}
                        </CommandShortcut>
                      )}
                    </CommandItem>
                  </Link>
                ))}
              </CommandGroup>
              <CommandSeparator />
            </>
          ))}
        </CommandList>
      </CommandDialog>
    </>
  );
}
