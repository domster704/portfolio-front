import { Experience, experiencesSchema } from "@entities/experience";
import { apiFetch } from "@shared/api/client";

export async function getAllExperience(locale: string): Promise<Experience[]> {
  try {
    return await apiFetch(`/jobs?locale=${locale}`, experiencesSchema);
  } catch {
    return [];
  }
}
