import { $apiURL } from "@shared/constants/api";
import { About, aboutSchema } from "@entities/about";

export async function getAbout(locale: string): Promise<About> {
  const response = await fetch(`${$apiURL}/about?locale=${locale}`, {
    next: {
      revalidate: 3600,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch about data");
  }

  const data = await response.json();
  return aboutSchema.parse(data.data);
}
