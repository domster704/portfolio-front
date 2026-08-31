import { About, aboutSchema } from "@entities/about";
import { apiFetch } from "@shared/api/client";

export async function getAbout(locale: string): Promise<About | null> {
  return await apiFetch(`/about?locale=${locale}`, aboutSchema);
}
