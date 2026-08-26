import { type FC } from "react";
import HelloSection from "@pages/home/ui/sections/hello/HelloSection";
import AboutSection from "@pages/home/ui/sections/about/AboutSection";
import SkillsSection from "@pages/home/ui/sections/skills/SkillsSection";
import ExperienceSection from "@pages/home/ui/sections/experience/ExperienceSection";
import ProjectsSection from "@pages/home/ui/sections/projects/ProjectsSection";
import EducationSection from "@pages/home/ui/sections/education/EducationSection";

const Home: FC = ({}) => {
  return (
    <>
      <HelloSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      {/*<ProjectsSection />*/}
    </>
  );
};

export default Home;
