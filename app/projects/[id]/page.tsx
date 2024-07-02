import Breadcrumbs from "@/components/Breadcrumbs";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import PageTemplate from "@/components/PageTemplate";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { Projects } from "@/data/Projects";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params: { id },
}: {
  params: { id: string };
}) {
  const project = Projects.find((entry) => entry.id === id);
  const title = project ? project.title : "No Project Found";
  return {
    title,
  };
}

export async function generateStaticParams() {
  return Projects.map((project) => ({
    id: project.id,
  }));
}

const ProjectPage = async ({ params: { id } }: { params: { id: string } }) => {
  const project = Projects.find((entry) => entry.id === id);
  if (!project) {
    notFound();
  }
  return (
    <PageTemplate>
      <MaxWidthWrapper>
        <div className="bg-base-200 text-base-content p-5">
          <Breadcrumbs
            className="mb-5"
            entries={[
              { label: "Home", href: "/" },
              { label: "Projects", href: "/projects" },
            ]}
          />
          <div className="flex h-fit flex-col gap-10 xl:flex-row">
            <div className="flex w-full flex-col gap-3 xl:w-2/6">
              {project.title && (
                <h1 className="text-2xl font-extrabold">{project.title}</h1>
              )}
              {project.description && (
                <>
                  <Separator />
                  <h1 className="text-2xl font-extrabold">Description</h1>
                  <p>{project.description}</p>
                </>
              )}
              {project.publishDate && (
                <>
                  <Separator />
                  <h1 className="text-2xl font-extrabold">Year</h1>
                  <p>{project.publishDate.getFullYear()}</p>
                </>
              )}
              {project.tools && (
                <>
                  <Separator />
                  <h1 className="text-2xl font-extrabold">Tools</h1>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, index) => (
                      <Badge key={index} variant="outline">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </>
              )}
              {project.languages && (
                <>
                  <Separator />
                  <h1 className="text-2xl font-extrabold">Languages</h1>
                  <div className="flex flex-wrap gap-2">
                    {project.languages.map((language, index) => (
                      <Badge key={index} variant="outline">
                        {language}
                      </Badge>
                    ))}
                  </div>
                </>
              )}
              {project.tags && (
                <>
                  <Separator />
                  <h1 className="text-2xl font-extrabold">Tags</h1>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <Badge key={index} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </>
              )}
              {project.pageUrl && (
                <>
                  <Separator />
                  <Link href={project.pageUrl} className={buttonVariants()}>
                    Visit Project Page
                  </Link>
                </>
              )}
            </div>
            <div className="flex w-full flex-col gap-2 xl:ml-5 xl:w-4/6">
              {project.screenshots && project.screenshots.length > 0 && (
                <>
                  <h1 className="text-2xl font-extrabold">Screenshots</h1>
                  <Separator />
                  <div className="px-20 xl:px-0">
                    <Carousel>
                      <CarouselContent>
                        {project.screenshots.map((screenshot, index) => (
                          <CarouselItem key={index}>
                            <div className="p-1">
                              <Card>
                                <CardContent className="flex aspect-video items-center justify-center p-6">
                                  <Image
                                    src={screenshot}
                                    width={0}
                                    height={0}
                                    alt=""
                                    className="w-full object-contain"
                                  />
                                </CardContent>
                              </Card>
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious />
                      <CarouselNext />
                    </Carousel>
                  </div>
                </>
              )}
              {project.videos && project.videos.length > 0 && (
                <>
                  <Separator />
                  <h1 className="text-2xl font-extrabold">Videos</h1>
                  <Separator />
                </>
              )}
              {project.screenshots &&
                project.screenshots.length == 0 &&
                project.videos &&
                project.videos.length == 0 && <h1>No media available</h1>}
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </PageTemplate>
  );
};

export default ProjectPage;
