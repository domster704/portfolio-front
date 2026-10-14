import { z } from "zod";

export const mediaSchema = z.object({
  name: z.string(),
  url: z.string().min(1),
  mime: z.string(),
  size: z.coerce.number().nonnegative(),
});

export const mediasSchema = z.array(mediaSchema);

export type Media = z.infer<typeof mediaSchema>;
