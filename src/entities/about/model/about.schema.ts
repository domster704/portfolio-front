import { z } from "zod";

export const aboutSchema = z.object({
  description: z.string(),
});

export type About = z.infer<typeof aboutSchema>;
