import { type FC } from "react";
import {
  AboutSection,
  EducationSection,
  ExperienceSection,
  HelloSection,
  ProjectsSection,
  SkillsSection,
} from "@pages/home/ui/sections";

const Home: FC = ({}) => {
  return (
    <>
      <HelloSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <ProjectsSection />
    </>
  );
};

export default Home;
