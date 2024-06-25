import Project from "@/data/classes/Project";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { buttonVariants } from "./ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { title, tags, id, thumbnail } = project;
  return (
    <Card
      className="flex flex-col bg-muted/50 bg-cover bg-center bg-blend-overlay dark:bg-muted"
      style={{
        backgroundImage: `url(${thumbnail.src})`,
      }}
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
