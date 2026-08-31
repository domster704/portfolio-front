import { Project, projectsSchema } from "@entities/project";
import { apiFetch } from "@shared/api/client";

export async function getAllProjects(locale: string): Promise<Project[]> {
  try {
    return await apiFetch(`/projects?locale=${locale}`, projectsSchema);
  } catch {
    return [];
  }
}
