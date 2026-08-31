import { SkillGroup, skillGroupsSchema } from "@entities/skill-group";
import { apiFetch } from "@shared/api/client";

export async function getAllSkillGroups(locale: string): Promise<SkillGroup[]> {
  try {
    const data = await apiFetch(
      `/skill?populate=group&locale=${locale}`,
      skillGroupsSchema,
    );
    return data.group;
  } catch {
    return [];
  }
}
