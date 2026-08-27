import { $apiURL } from "@shared/constants/api";
import { Project, projectsSchema } from "@entities/project";

export async function getAllProjects(locale: string): Promise<Project[]> {
  const response = await fetch(`${$apiURL}/projects?locale=${locale}`, {
    next: {
      revalidate: 3600,
    },
  });

  if (!response.ok) {
    return [];
  }

  const data = await response.json();
  return projectsSchema.parse(data.data);
}
