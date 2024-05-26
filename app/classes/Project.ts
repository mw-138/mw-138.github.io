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
  CPlusPlus = "C++",
  HTML = "HTML",
  CSS = "CSS",
  Razor = "Razor",
  TypeScript = "TypeScript",
}

export enum Tag {
  Game = "Game",
  Software = "Software",
  Website = "Website",
}

export default class Project {
  public publishDate: Date;
  public visible: boolean;
  public id: string;
  public title: string;
  public description: string;
  public year: number;
  public toolsUsed: Tool[];
  public languagesUsed: Language[];
  public thumbnail: StaticImageData;
  public pageUrl: string;
  public screenshots: StaticImageData[];
  public videos: string[];
  public tags: Tag[];

  constructor(
    publishDate: Date,
    visible: boolean,
    id: string,
    title: string,
    description: string,
    year: number,
    toolsUsed: Tool[],
    languagesUsed: Language[],
    thumbnail: StaticImageData,
    pageUrl: string,
    screenshots: StaticImageData[],
    videos: string[],
    tags: Tag[],
  ) {
    this.publishDate = publishDate;
    this.visible = visible;
    this.id = id;
    this.title = title;
    this.description = description;
    this.year = year;
    this.toolsUsed = toolsUsed;
    this.languagesUsed = languagesUsed;
    this.thumbnail = thumbnail;
    this.pageUrl = pageUrl;
    this.screenshots = screenshots;
    this.videos = videos;
    this.tags = tags;
  }

  public GetSiteUrl(): string {
    return `/projects/${this.id}`;
  }

  private GetFormattedArray<T>(arr: T[]): string {
    if (arr.length === 0) return "";
    let formattedString = arr.join(", ");
    if (formattedString.endsWith(", ")) {
      formattedString = formattedString.slice(0, -2);
    }
    return formattedString;
  }

  public GetFormattedToolsUsed(): string {
    return this.GetFormattedArray(this.toolsUsed);
  }

  public GetFormattedLanguagesUsed(): string {
    return this.GetFormattedArray(this.languagesUsed);
  }

  public GetFormattedTags(): string {
    return this.GetFormattedArray(this.tags);
  }
}
