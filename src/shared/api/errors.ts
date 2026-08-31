export class ApiError extends Error {
  constructor(
    public readonly status: number,
    public readonly statusText: string,
    public readonly url?: string,
    public readonly details?: unknown,
  ) {
    super(`API request failed: ${status} ${statusText}`);

    this.name = "ApiError";
  }
}
