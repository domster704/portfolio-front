import { z } from "zod";

export const experienceSchema = z.object({
  id: z.number(),

  companyName: z.string(),
  companyURL: z.url().nullable(),

  about: z.string(),

  date: z.string(),

  position: z.string(),

  skills: z.array(z.string()),

  order: z.number(),
});

export const experiencesSchema = z.array(experienceSchema);

export type Experience = z.infer<typeof experienceSchema>;
