import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import ProjectCard from "@/app/components/ProjectCard";
import React from "react";
import { Projects } from "@/_data/Projects";
import { ProjectView } from "../components/ProjectView";

const ProjectsPage = () => {
  return (
    <main>
      <Navbar />
      {/* <div className="grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 place-items-center place-content-center gap-10 bg-base-200 p-20">
        {Projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div> */}
      <ProjectView />
      <Footer />
    </main>
  );
};

export default ProjectsPage;
