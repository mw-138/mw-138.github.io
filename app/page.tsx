import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import PageTemplate from "@/components/PageTemplate";
import ProjectCard from "@/components/ProjectCard";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  HeroProject,
  HighlightedProjects,
  RecentProjects,
} from "@/data/Projects";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <PageTemplate>
      <MaxWidthWrapper>
        <MaxWidthWrapper
          className="mt-6 rounded-xl border border-muted bg-muted bg-cover bg-bottom bg-blend-overlay"
          style={{
            backgroundImage:
              HeroProject !== undefined
                ? `url('${HeroProject.thumbnail.src}')`
                : "",
          }}
        >
          <div className="mx-auto flex max-w-3xl flex-col items-center py-20 text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              I&apos;m <span className="text-primary">Matthew Watson</span>.
            </h1>
            <p className="mt-6 max-w-prose text-lg text-muted-foreground sm:text-sm">
              A Junior Programmer from the United Kingdom with experience in
              Game Development, Software Development and Web Development.
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              {HeroProject && (
                <Link
                  href={`/projects/${HeroProject.id}`}
                  className={buttonVariants()}
                >
                  Visit Showcased Project
                </Link>
              )}
              <Link
                href="/about"
                className={cn(
                  buttonVariants({ variant: "ghost" }),
                  "flex gap-2",
                )}
              >
                About Me
                <ArrowRight />
              </Link>
            </div>
          </div>
        </MaxWidthWrapper>
        <MaxWidthWrapper className="mt-6 rounded-xl border border-muted bg-cover bg-bottom p-10 bg-blend-overlay">
          <h1 className="text-xl font-bold tracking-tight">Recent Projects</h1>
          <Separator className="my-4" />
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
            {RecentProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </MaxWidthWrapper>
        <MaxWidthWrapper className="mt-6 rounded-xl border border-muted bg-cover bg-bottom p-10 bg-blend-overlay">
          <h1 className="text-xl font-bold tracking-tight">
            Highlighted Projects
          </h1>
          <Separator className="my-4" />
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
            {HighlightedProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </MaxWidthWrapper>
      </MaxWidthWrapper>
    </PageTemplate>
  );
}
