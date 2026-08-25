import {$apiURL} from "@shared/constants/api";
import {SkillGroup, skillGroupsSchema,} from "@entities/skill-group/model/skill-group.schema";

export async function getAllSkillGroups(locale: string): Promise<SkillGroup[]> {
  const response = await fetch(
    `${$apiURL}/skill?populate=group&locale=${locale}`,
    {
      next: {
        revalidate: 3600,
      },
    },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch skills");
  }

  const data = await response.json();
  return skillGroupsSchema.parse(data.data.group);
}
