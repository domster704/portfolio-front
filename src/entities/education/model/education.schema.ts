import { z } from "zod";

export const educationType = z.enum([
  "bachelor",
  "master",
  "professionalRetraining",
  "additionalEducation",
  "course",
]);

export const educationSchema = z.object({
  id: z.number(),

  name: z.string(),
  url: z.url(),
  specialization: z.string(),

  date: z.string(),

  description: z.string(),
  educationType: educationType,

  order: z.number(),
});

export const educationsSchema = z.array(educationSchema);

export type EducationType = z.infer<typeof educationType>;
export type Education = z.infer<typeof educationSchema>;
