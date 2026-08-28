import { getLocale, getTranslations } from "next-intl/server";
import Wrapper from "@shared/ui/wrapper";
import Section from "@shared/ui/section";
import { SECTIONS } from "@shared/constants/sections";
import { getAllProjects } from "@entities/project";
import ProjectsView from "./ProjectsView";

const ProjectsSection = async ({}) => {
  const locale = await getLocale();
  const t = await getTranslations("Project");

  const projects = (await getAllProjects(locale))
    .filter((project) => project.active)
    .sort((a, b) => a.order - b.order);

  return (
    <Wrapper>
      <Section id={SECTIONS.PROJECTS} title={t("title")} label={t("label")}>
        <ProjectsView projects={projects} />
      </Section>
    </Wrapper>
  );
};

export default ProjectsSection;
