import { Experience, experiencesSchema } from "@entities/job";
import { $apiURL } from "@shared/constants/api";

export async function getAllExperience(locale: string): Promise<Experience[]> {
  const response = await fetch(`${$apiURL}/jobs?locale=${locale}`, {
    next: {
      revalidate: 3600,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch experiences");
  }

  const data = await response.json();
  return experiencesSchema.parse(data.data);
}
