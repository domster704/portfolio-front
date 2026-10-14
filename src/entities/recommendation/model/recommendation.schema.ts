import { z } from "zod";
import { experienceSchema } from "@entities/experience";
import { mediaSchema } from "@entities/media";

export const recommendationSchema = z.object({
  documentId: z.string().min(1),
  quote: z.string().min(1),
  issuedAt: z.iso.date(),
  documentTitle: z.string().min(1),
  documentNote: z.string().nullish(),
  pageCount: z.number().int().positive().nullish(),
  order: z.number(),

  job: experienceSchema.pick({
    companyName: true,
    position: true,
    date: true,
  }),

  file: mediaSchema,
});

export const recommendationsSchema = z.array(recommendationSchema);

export type Recommendation = z.infer<typeof recommendationSchema>;
