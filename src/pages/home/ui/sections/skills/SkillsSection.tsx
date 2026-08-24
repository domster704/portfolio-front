import { type FC } from "react";
import style from "./SkillsSection.module.scss";

import Section from "@shared/ui/section";
import Wrapper from "@shared/ui/wrapper";

import { useTranslations } from "next-intl";
import { SECTIONS } from "@shared/constants/sections";

const SKILL_GROUPS = [
  {
    title: "Backend",
    skills: [
      "Python",
      "FastAPI",
      "SQLAlchemy",
      "SQLModel",
      "Alembic",
      "Pydantic",
      "Node.js",
      "REST API",
      "GraphQL",
      "WebSocket",
      "gRPC",
      "aiogram",
    ],
  },
  {
    title: "Frontend",
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Redux Toolkit",
      "Zustand",
      "FSD",
      "CSS",
      "SCSS",
      "Zod",
    ],
  },
  {
    title: "Databases",
    skills: [
      "PostgreSQL",
      "MySQL",
      "Redis",
      "MongoDB",
      "S3",
      "SQL",
      "ORM",
      "ACID",
      "SAGA",
    ],
  },
  {
    title: "Architecture",
    skills: [
      "DDD",
      "Clean Architecture",
      "Microservices",
      "FSD",
      "SOLID",
      "Design Patterns",
    ],
  },
  {
    title: "Security",
    skills: [
      "JWT",
      "OAuth2",
      "Access Control",
      "Rate Limiting",
      "Retry Logic",
      "Mandatory Access Control",
    ],
  },
  {
    title: "Infrastructure",
    skills: [
      "Docker",
      "Docker Compose",
      "Linux",
      "Nginx",
      "Ansible",
      "CI/CD",
      "GitHub Actions",
      "OpenBalena",
      "Proxmox VE",
      "OpenWRT",
      "WireGuard",
      "Netbird",
      "Cloudflare",
    ],
  },
  {
    title: "Monitoring & Testing",
    skills: [
      "PyTest",
      "Unit Testing",
      "Integration Testing",
      "Zabbix",
      "Logging",
      "Metrics",
    ],
  },
  {
    title: "Tools",
    skills: ["Git", "Bash", "Postman", "net-tools"],
  },
] as const;

const SkillsSection: FC = () => {
  const t = useTranslations("Skills");

  const SKILL_NAMES = Array.from(
    new Set(SKILL_GROUPS.flatMap((group) => group.skills)),
  );

  return (
    <>
      <div className={style.skillContainer}>
        <div className={style.skillScroll}>
          {[...SKILL_NAMES, ...SKILL_NAMES].map((skill, index) => (
            <span key={`${skill}-${index}`}>{skill}</span>
          ))}
        </div>
      </div>

      <Wrapper>
        <Section id={SECTIONS.SKILLS} title={t("title")} label={t("label")}>
          <div className={style.skillsGrid}>
            {SKILL_GROUPS.map((group) => (
              <article key={group.title} className={style.skillGroup}>
                <h4 className={"title-4"}>{group.title}</h4>

                <div className={style.skillList}>
                  {group.skills.map((skill) => (
                    <span key={skill} className={style.skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Section>
      </Wrapper>
    </>
  );
};

export default SkillsSection;
