import { z } from "zod";

import { mediaSchema } from "@entities/media";

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
  educationType,

  order: z.number(),

  documents: z
    .array(mediaSchema)
    .nullish()
    .transform((documents) => documents ?? []),
});

export const educationsSchema = z.array(educationSchema);

export type EducationType = z.infer<typeof educationType>;
export type Education = z.infer<typeof educationSchema>;
