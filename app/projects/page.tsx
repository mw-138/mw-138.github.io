import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import PageTemplate from "@/components/PageTemplate";
import { ProjectsView } from "@/components/ProjectsView";

const ProjectsPage = () => {
  return (
    <PageTemplate>
      <MaxWidthWrapper>
        <ProjectsView />
      </MaxWidthWrapper>
    </PageTemplate>
  );
};

export default ProjectsPage;
