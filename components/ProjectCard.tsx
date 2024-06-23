import Project from "@/data/classes/Project";
import { Button, buttonVariants } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge, badgeVariants } from "./ui/badge";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { title, screenshots, tags, id } = project;
  const thumbnail = screenshots.length > 0 ? screenshots[0] : null;
  const hasThumbnail = thumbnail !== null;
  return (
    <Card
      className="flex flex-col bg-muted/50 bg-cover bg-center bg-blend-overlay dark:bg-muted"
      style={
        hasThumbnail
          ? {
              backgroundImage: `url(${thumbnail.src})`,
            }
          : {}
      }
    >
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-1 items-center gap-1">
        <div className="flex flex-grow gap-1">
          {tags.map((tag, index) => (
            <Badge key={index} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Link
          href={`/projects/${id}`}
          className={cn("w-full", buttonVariants())}
        >
          View
        </Link>
      </CardFooter>
    </Card>
  );
}
