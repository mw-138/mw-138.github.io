import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Navbar from "@/components/Navbar";
import { ProjectsView } from "@/components/ProjectsView";

const ProjectsPage = () => {
  return (
    <>
      <Navbar />
      <MaxWidthWrapper>
        <ProjectsView />
      </MaxWidthWrapper>
    </>
  );
};

export default ProjectsPage;
