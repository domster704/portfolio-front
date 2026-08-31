import { SkillGroup, skillGroupsSchema } from "@entities/skill-group";
import { apiFetch } from "@shared/api/client";

export async function getAllSkillGroups(locale: string): Promise<SkillGroup[]> {
  try {
    return await apiFetch(`/skill?locale=${locale}`, skillGroupsSchema);
  } catch {
    return [];
  }
}
