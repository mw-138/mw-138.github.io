import { StaticImageData } from "next/image";

export default class Game {
  public isHighlighted: boolean;
  public visible: boolean;
  public id: string;
  public title: string;
  public description: string;
  public year: number;
  public thumbnail: StaticImageData;
  public pageUrl: string;
  public screenshots: StaticImageData[];
  public videos: string[];

  constructor(
    isHighlighted: boolean,
    visible: boolean,
    id: string,
    title: string,
    description: string,
    year: number,
    thumbnail: StaticImageData,
    pageUrl: string,
    screenshots: StaticImageData[],
    videos: string[]
  ) {
    this.isHighlighted = isHighlighted;
    this.visible = visible;
    this.id = id;
    this.title = title;
    this.description = description;
    this.year = year;
    this.thumbnail = thumbnail;
    this.pageUrl = pageUrl;
    this.screenshots = screenshots;
    this.videos = videos;
  }

  public SiteUrl(): string {
    return `/portfolios/game-development/${this.id}`;
  }
}
