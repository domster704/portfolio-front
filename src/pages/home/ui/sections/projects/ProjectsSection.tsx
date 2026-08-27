import { getLocale, getTranslations } from "next-intl/server";
import Wrapper from "@shared/ui/wrapper";
import Section from "@shared/ui/section";
import { SECTIONS } from "@shared/constants/sections";
import { getAllProjects, ProjectItem } from "@entities/project";

const ProjectsSection = async ({}) => {
  const locale = await getLocale();
  const t = await getTranslations("Project");

  const projects = await getAllProjects(locale);

  return (
    <Wrapper>
      <Section id={SECTIONS.PROJECTS} title={t("title")} label={t("label")}>
        <div>
          {projects
            .filter((project) => project.active)
            .sort((a, b) => a.order - b.order)
            .map((project, index) => (
              <ProjectItem key={project.id} item={project} index={index} />
            ))}
        </div>
      </Section>
    </Wrapper>
  );
};

export default ProjectsSection;
