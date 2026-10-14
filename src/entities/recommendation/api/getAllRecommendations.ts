import {
  type Recommendation,
  recommendationsSchema,
} from "@entities/recommendation";
import { apiFetch } from "@shared/api/client";

export async function getAllRecommendations(
  locale: string,
): Promise<Recommendation[]> {
  try {
    return await apiFetch(
      `/recommendations?locale=${locale}`,
      recommendationsSchema,
    );
  } catch {
    return [];
  }
}
