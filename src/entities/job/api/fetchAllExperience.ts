import {
  Experience,
  experiencesSchema,
} from "@entities/job/model/experience.schema";
import { $apiURL } from "@shared/constants/api";

export async function getAllExperience(): Promise<Experience[]> {
  const response = await fetch(`${$apiURL}/jobs`, {
    next: {
      revalidate: 3600,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch experiences");
  }

  const data = await response.json();
  console.log(data.data);
  return experiencesSchema.parse(data.data);
}
