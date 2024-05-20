import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import React from "react";
import { ProjectsView } from "../components/ProjectsView";

const ProjectsPage = () => {
  return (
    <main>
      <Navbar />
      <ProjectsView />
      <Footer />
    </main>
  );
};

export default ProjectsPage;
