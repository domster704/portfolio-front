import { type NextRequest } from "next/server";
import { z } from "zod";

import { mediaSchema } from "@entities/media";
import { routing } from "@i18n/routing";
import { apiFetch } from "@shared/api/client";
import { ApiError } from "@shared/api/errors";
import { getAssetUrl } from "@shared/lib/getAssetUrl";

const documentSchema = z.object({
  file: mediaSchema.nullish(),
});

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ documentId: string }> },
) {
  const { documentId } = await params;
  const locale =
    request.nextUrl.searchParams.get("locale") ?? routing.defaultLocale;

  if (!routing.locales.some((value) => value === locale)) {
    return new Response("Invalid locale", { status: 400 });
  }

  try {
    const { file } = await apiFetch(
      `/recommendations/${encodeURIComponent(documentId)}?locale=${locale}&populate=file`,
      documentSchema,
      { next: { revalidate: 0 } },
    );

    if (!file || file.mime !== "application/pdf") {
      return new Response("PDF not found", { status: 404 });
    }

    const response = await fetch(getAssetUrl(file.url), {
      cache: "no-store",
    });

    if (!response.ok || !response.body) {
      return new Response("Could not load PDF", { status: 502 });
    }

    const filename = encodeURIComponent(file.name).replace(
      /['()*]/g,
      (character) =>
        `%${character.charCodeAt(0).toString(16).toUpperCase()}`,
    );

    return new Response(response.body, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition":
          `attachment; filename="recommendation.pdf"; filename*=UTF-8''${filename}`,
        "Cache-Control": "no-store",
      },
    });
  } catch (error) {
    console.error("Failed to download recommendation:", error);

    return new Response("Could not download PDF", {
      status: error instanceof ApiError ? error.status : 502,
    });
  }
}