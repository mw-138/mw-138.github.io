import React from "react";
import { Projects } from "@/data/Projects";
import { notFound } from "next/navigation";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import Link from "next/link";

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
      <div className="bg-base-200 p-5 text-base-content">
        <Breadcrumbs
          className="mb-5"
          entries={[
            { label: "Home", link: "/" },
            { label: "Projects", link: "/projects" },
          ]}
        />
        <div className="flex h-fit w-full flex-col xl:flex-row">
          <div className="flex w-96 flex-col">
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
            {project.screenshots.length == 0 && project.videos.length == 0 && (
              <h1>No media available</h1>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProjectPage;
