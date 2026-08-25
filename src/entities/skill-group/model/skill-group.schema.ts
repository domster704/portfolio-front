import { z } from "zod";

export const skillGroupSchema = z.object({
  id: z.number(),

  title: z.string(),
  skills: z.array(z.string()),
});

export const skillGroupsSchema = z.array(skillGroupSchema);
export type SkillGroup = z.infer<typeof skillGroupSchema>;
