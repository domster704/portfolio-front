import { ZodType } from "zod";
import { $apiURL } from "@shared/constants/api";
import { ApiError } from "@shared/api/errors";

export async function apiFetch<T>(
  path: string,
  schema: ZodType<T>,
  options?: RequestInit,
): Promise<T> {
  const response = await fetch(`${$apiURL}${path}`, {
    ...options,
    next: {
      revalidate: 3600,
      ...options?.next,
    },
  });

  if (!response.ok) {
    throw new ApiError(response.status, response.statusText);
  }

  const json = await response.json();
  return schema.parse(json.data);
}
