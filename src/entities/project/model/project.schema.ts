import { z } from "zod";

export const projectSchema = z.object({
  id: z.number(),

  name: z.string(),
  about: z.string(),

  skills: z.array(z.string()),
  year: z.number(),

  target: z.string().nullable(),

  order: z.number(),
  active: z.boolean(),
});

export const projectsSchema = z.array(projectSchema);

export type Project = z.infer<typeof projectSchema>;
