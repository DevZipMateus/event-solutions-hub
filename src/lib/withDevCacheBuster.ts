const DEV_CACHE_BUSTER = import.meta.env.DEV ? String(Date.now()) : "";

/**
 * Prevents stale assets in the Preview environment by appending a stable, per-reload
 * cache buster query param in DEV only.
 */
export function withDevCacheBuster(url: string): string {
  if (!DEV_CACHE_BUSTER) return url;
  const joiner = url.includes("?") ? "&" : "?";
  return `${url}${joiner}v=${DEV_CACHE_BUSTER}`;
}
