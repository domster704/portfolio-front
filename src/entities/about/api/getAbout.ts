import { $apiURL } from "@shared/constants/api";
import { About, aboutSchema } from "@entities/about";

export async function getAbout(locale: string): Promise<About | null> {
  const response = await fetch(`${$apiURL}/about?locale=${locale}`, {
    next: {
      revalidate: 3600,
    },
  });

  if (!response.ok) {
    return null;
  }

  const data = await response.json();
  return aboutSchema.parse(data.data);
}
