import { type FC, Suspense } from "react";

import {
  AboutSection,
  ContactSection,
  EducationSection,
  ExperienceSection,
  HelloSection,
  ProjectsSection,
  SkillsSection,
} from "@pages/home/ui/sections";

import SectionSkeleton from "@shared/ui/section-skeleton";
import { SECTIONS } from "@shared/constants/sections";
import Wrapper from "@shared/ui/wrapper";

const Home: FC = () => {
  return (
    <>
      <HelloSection />

      <Suspense fallback={<SectionSkeleton />}>
        <AboutSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <SkillsSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <ExperienceSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <EducationSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <ProjectsSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <ContactSection />
      </Suspense>
    </>
  );
};

export default Home;
