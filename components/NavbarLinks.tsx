"use client";

import { forwardRef, useState } from "react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Icons } from "./Icons";
import NavContact from "./NavContact";

const projects: { title: string; href: string; description: string }[] = [
  {
    title: "Game Development",
    href: "/projects",
    description: "View game development projects.",
  },
  {
    title: "Web Development",
    href: "/projects",
    description: "View web development projects.",
  },
  {
    title: "Software Development",
    href: "/projects",
    description: "View software development projects.",
  },
];

export function NavbarLinks() {
  const [goal, setGoal] = useState(350);

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)));
  }
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <NavigationMenuLink href="/about" className="cursor-pointer">
              About
            </NavigationMenuLink>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/about"
                  >
                    <Icons.siteLogo className="h-6 w-6 fill-foreground" />
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Matthew Watson
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Junior Programmer, Game Development, Software Development,
                      Web Development
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/about#about_me" title="Introduction">
                A brief introduction to who I am and my background.
              </ListItem>
              <ListItem href="/about#education" title="Education">
                An insight into my education.
              </ListItem>
              <ListItem href="/about#technical_skills" title="Technical Skills">
                A list of all my technical skills.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <NavigationMenuLink href="/projects" className="cursor-pointer">
              Projects
            </NavigationMenuLink>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {projects.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavContact />
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
