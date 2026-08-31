import { Education, educationsSchema } from "@entities/education";
import { apiFetch } from "@shared/api/client";

export async function getAllEducations(locale: string): Promise<Education[]> {
  try {
    return await apiFetch(`/educations?locale=${locale}`, educationsSchema);
  } catch {
    return [];
  }
}
