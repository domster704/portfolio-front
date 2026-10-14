import { $assetsURL } from "@shared/constants/api";

export function getAssetUrl(url: string): string {
  if (/^https?:\/\//i.test(url)) {
    return url;
  }

  if (!url.startsWith("/") || url.startsWith("//")) {
    throw new Error("Invalid media URL");
  }

  if (!$assetsURL) {
    throw new Error("NEXT_ASSETS_URL is not configured");
  }

  return new URL(url, $assetsURL).toString();
}
