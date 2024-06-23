import Breadcrumbs from "@/components/Breadcrumbs";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Navbar from "@/components/Navbar";
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
    title: title,
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
    <>
      <Navbar />
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
              {project.toolsUsed && (
                <>
                  <Separator />
                  <h1 className="text-2xl font-extrabold">Tools Used</h1>
                  <div className="flex flex-wrap gap-2">
                    {project.toolsUsed.map((tool, index) => (
                      <Badge key={index} variant="outline">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </>
              )}
              {project.languagesUsed && (
                <>
                  <Separator />
                  <h1 className="text-2xl font-extrabold">
                    Languages/Markup Syntax Used
                  </h1>
                  <div className="flex flex-wrap gap-2">
                    {project.languagesUsed.map((language, index) => (
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
              {project.screenshots.length > 0 && (
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
              {project.videos.length > 0 && (
                <>
                  <Separator />
                  <h1 className="text-2xl font-extrabold">Videos</h1>
                  <Separator />
                </>
              )}
              {project.screenshots.length == 0 &&
                project.videos.length == 0 && <h1>No media available</h1>}
            </div>
          </div>
          {/* <div className="flex h-fit w-full flex-col bg-red-500 xl:flex-row">
            <div className="flex w-96 flex-col bg-blue-500">
              {project.title && (
                <h1 className="text-2xl font-extrabold">{project.title}</h1>
              )}
              {project.description && (
                <>
                  <div className="divider" />
                  <h1 className="text-2xl font-extrabold">Description</h1>
                  <p>{project.description}</p>
                </>
              )}
              {project.publishDate && (
                <>
                  <div className="divider" />
                  <h1 className="text-2xl font-extrabold">Year</h1>
                  <p>{project.publishDate.getFullYear()}</p>
                </>
              )}
              {project.toolsUsed && (
                <>
                  <div className="divider" />
                  <h1 className="text-2xl font-extrabold">Tools Used</h1>
                  <p>{project.GetFormattedToolsUsed()}</p>
                </>
              )}
              {project.languagesUsed && (
                <>
                  <div className="divider" />
                  <h1 className="text-2xl font-extrabold">
                    Languages/Markup Syntax Used
                  </h1>
                  <p>{project.GetFormattedLanguagesUsed()}</p>
                </>
              )}
              {project.tags && (
                <>
                  <div className="divider" />
                  <h1 className="text-2xl font-extrabold">Tags</h1>
                  <p>{project.GetFormattedTags()}</p>
                </>
              )}
              {project.pageUrl && (
                <>
                  <div className="divider" />
                  <Link href={project.pageUrl} className="btn btn-primary">
                    Visit Project Page
                  </Link>
                </>
              )}
            </div>
            <div className="divider divider-horizontal" />
            <div className="flex-1">
              {project.screenshots.length > 0 && (
                <>
                  <div className="divider xl:hidden" />
                  <h1 className="text-2xl font-extrabold">Screenshots</h1>
                  <div className="xl:divider" />
                  <div className="carousel h-96 w-full">
                    {project.screenshots.map((screenshot, index) => (
                      <div
                        key={index}
                        id={`item_${index}`}
                        className="carousel-item w-full"
                      >
                        <Image
                          src={screenshot}
                          width={0}
                          height={0}
                          alt=""
                          className="w-full object-contain"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex w-full justify-center gap-2 py-2">
                    {project.screenshots.map((_screenshot, index) => (
                      <a key={index} href={`#item_${index}`} className="btn">
                        {index + 1}
                      </a>
                    ))}
                  </div>
                </>
              )}
              {project.videos.length > 0 && (
                <>
                  <div className="divider" />
                  <h1 className="text-2xl font-extrabold">Videos</h1>
                  <div className="divider" />
                </>
              )}
              {project.screenshots.length == 0 &&
                project.videos.length == 0 && <h1>No media available</h1>}
            </div>
          </div> */}
        </div>
      </MaxWidthWrapper>
    </>
  );
};

export default ProjectPage;
