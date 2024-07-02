import { StaticImageData } from "next/image";

export enum Tool {
  Unity = "Unity",
  UnrealEngine = "Unreal Engine",
  DotNet = ".NET",
  ASP = "ASP",
  VsCode = "VS Code",
  VisualStudio = "Visual Studio",
  React = "React",
  NextJs = "NextJS",
  TailwindCSS = "Tailwind CSS",
}

export enum Language {
  CSharp = "C#",
  CPP = "C++",
  HTML = "HTML",
  CSS = "CSS",
  Razor = "Razor",
  TypeScript = "TypeScript",
}

export enum Tag {
  Game = "Game",
  Software = "Software",
  Website = "Website",
  WorkInProgress = "Work In Progress",
}

export default interface Project {
  id: string;
  visible: boolean;
  title: string;
  description: string;
  publishDate: Date;
  tools: Tool[];
  languages: Language[];
  thumbnail: StaticImageData;
  pageUrl?: string;
  screenshots?: StaticImageData[];
  videos?: string[];
  tags: Tag[];
}
