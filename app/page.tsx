import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import { Button, buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Projects } from "@/data/Projects";
import Link from "next/link";

const page = () => {
  const highlightedProjects = Projects.filter((project) => {
    const projects = [
      "coin_catcher",
      "netflix_redesign",
      "subscription_tracker",
    ];
    return projects.includes(project.id);
  })
    .sort((a, b) => b.publishDate.getTime() - new Date().getTime())
    .filter((project) => project.visible)
    .slice(0, 3);

  const recentProjects = Projects.sort(
    (a, b) => b.publishDate.getTime() - new Date().getTime(),
  )
    .filter((project) => project.visible)
    .slice(0, 3);

  const heroProject = Projects.find((project) => project.id === "coin_catcher");

  return (
    <>
      <Navbar />
      <MaxWidthWrapper>
        <MaxWidthWrapper
          className="mt-6 rounded-xl border border-muted bg-muted bg-cover bg-bottom bg-blend-overlay"
          style={{
            backgroundImage:
              heroProject && heroProject.screenshots.length > 0
                ? `url('${heroProject.screenshots[0].src}')`
                : "",
          }}
        >
          <div className="mx-auto flex max-w-3xl flex-col items-center py-20 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              I&apos;m <span className="text-primary">Matthew Watson</span>.
            </h1>
            <p className="mt-6 max-w-prose text-lg text-muted-foreground sm:text-sm">
              A Junior Programmer from the United Kingdom with experience in
              Game Development, Software Development and Web Development.
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              {heroProject && (
                <Link
                  href={heroProject.GetSiteUrl()}
                  className={buttonVariants()}
                >
                  Visit Showcased Project
                </Link>
              )}
              <Button variant="ghost">About Me &rarr;</Button>
            </div>
          </div>
        </MaxWidthWrapper>
        <MaxWidthWrapper className="mt-6 rounded-xl border border-muted bg-cover bg-bottom p-10 bg-blend-overlay">
          <h1 className="text-xl font-bold tracking-tight text-foreground">
            Recent Projects
          </h1>
          <Separator className="my-4" />
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
            {recentProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </MaxWidthWrapper>
        <MaxWidthWrapper className="mt-6 rounded-xl border border-muted bg-cover bg-bottom p-10 bg-blend-overlay">
          <h1 className="text-xl font-bold tracking-tight text-foreground">
            Highlighted Projects
          </h1>
          <Separator className="my-4" />
          <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
            {highlightedProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </MaxWidthWrapper>
      </MaxWidthWrapper>
    </>
  );
};

export default page;
