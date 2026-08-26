import { Education, educationsSchema } from "@entities/education";
import { $apiURL } from "@shared/constants/api";

export async function getAllEducations(locale: string): Promise<Education[]> {
  const response = await fetch(`${$apiURL}/educations?locale=${locale}`, {
    next: {
      revalidate: 3600,
    },
  });

  if (!response.ok) {
    return [];
  }

  const data = await response.json();
  return educationsSchema.parse(data.data);
}
