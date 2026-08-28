"use client";

import { useState } from "react";
import style from "./ProjectsSection.module.scss";
import { Project, ProjectItem } from "@entities/project";

type ViewMode = "list" | "grid";

interface ProjectsViewProps {
  projects: Project[];
}

export default function ProjectsView({ projects }: ProjectsViewProps) {
  const [view, setView] = useState<ViewMode>("list");

  return (
    <div>
      <div className={style.toolbar} role="group" aria-label="Project view">
        <button
          type="button"
          className={style.viewButton}
          aria-label="List view"
          aria-pressed={view === "list"}
          onClick={() => setView("list")}
        >
          <span className={style.listIcon} aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
        </button>

        <button
          type="button"
          className={style.viewButton}
          aria-label="Grid view"
          aria-pressed={view === "grid"}
          onClick={() => setView("grid")}
        >
          <span className={style.gridIcon} aria-hidden="true">
            <i />
            <i />
            <i />
            <i />
          </span>
        </button>
      </div>

      <div className={view === "grid" ? style.grid : style.list}>
        {projects.map((project, index) => (
          <ProjectItem
            key={project.id}
            item={project}
            index={index}
            variant={view === "grid" ? "card" : "list"}
          />
        ))}
      </div>
    </div>
  );
}
