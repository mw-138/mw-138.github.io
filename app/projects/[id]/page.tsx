import React from "react";
import { Projects } from "@/_data/Projects";
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
      <div className="p-5 bg-base-200 text-base-content">
        <Breadcrumbs
          className="mb-5"
          entries={[
            { label: "Home", link: "/" },
            { label: "Projects", link: "/projects" },
          ]}
        />
        <div className="w-full h-fit flex xl:flex-row flex-col">
          <div className="w-96 flex flex-col">
            {project.title && (
              <h1 className="font-extrabold text-2xl">{project.title}</h1>
            )}
            {project.description && (
              <>
                <div className="divider" />
                <h1 className="font-extrabold text-2xl">Description</h1>
                <p>{project.description}</p>
              </>
            )}
            {project.year && (
              <>
                <div className="divider" />
                <h1 className="font-extrabold text-2xl">Year</h1>
                <p>{project.year}</p>
              </>
            )}
            {project.toolsUsed && (
              <>
                <div className="divider" />
                <h1 className="font-extrabold text-2xl">Tools Used</h1>
                <p>{project.GetFormattedToolsUsed()}</p>
              </>
            )}
            {project.languagesUsed && (
              <>
                <div className="divider" />
                <h1 className="font-extrabold text-2xl">
                  Languages/Markup Syntax Used
                </h1>
                <p>{project.GetFormattedLanguagesUsed()}</p>
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
            {project.tags && (
              <>
                <div className="divider" />
                <h1 className="font-extrabold text-2xl">Tags</h1>
                <p>{project.GetFormattedTags()}</p>
              </>
            )}
          </div>
          <div className="divider divider-horizontal" />
          <div className="flex-1">
            {project.screenshots.length > 0 && (
              <>
                <div className="divider xl:hidden" />
                <h1 className="font-extrabold text-2xl">Screenshots</h1>
                <div className="xl:divider" />
                <div className="carousel w-full h-96">
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
                <div className="flex justify-center w-full py-2 gap-2">
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
                <h1 className="font-extrabold text-2xl">Videos</h1>
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
