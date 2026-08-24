import { type FC } from "react";
import style from "./SkillsSection.module.scss";
import Section from "@shared/ui/section";
import { useTranslations } from "next-intl";
import { SECTIONS } from "@shared/constants/sections";
import Wrapper from "@shared/ui/wrapper";

const SKILL_NAMES = [
  "Python",
  "JavaScript",
  "TypeScript",
  "React",
  "NextJS",
  "REST API",
  "Node.js",
  "FastAPI",
  "SQLAlchemy",
  "Docker",
  "CI/CD",
  "MySQL",
  "PostgreSQL",
  "Git",
  "Redis",
  "CSS",
  "Aiogram",
  "Linux",
  "Nginx",
  "Ansible",
  "Zabbix",
  "WireGuard",
  "PyTest",
  "gRPC",
  "Bash",
  "Cloudflare",
  "Netbird",
  "Proxmox VE",
  "OpenBalena",
  "OpenWRT",
  "S3",
  "DDD",
  "Clean Architecture",
  "Certbot and Let’s Encrypt TLS",
  "SCSS",
  "Postman",
  "OAuth2",
  "Payment Gateways",
] as const;

const SkillsSection: FC = ({}) => {
  const t = useTranslations("Skills");

  return (
    <>
      <div className={style.skillContainer}>
        <div className={style.skillScroll}>
          {SKILL_NAMES.map((skill) => {
            return <span key={skill}>{skill}</span>;
          })}
        </div>
      </div>

      <Wrapper>
        <Section id={SECTIONS.SKILLS} title={t("title")} label={t("label")}>
          <></>
        </Section>
      </Wrapper>
    </>
  );
};

export default SkillsSection;
