import { cacheLife } from "next/cache";

/** Copyright year, cached into the static shell and refreshed with the cache. */
export async function Year() {
  "use cache";
  cacheLife("days");
  return <>{new Date().getFullYear()}</>;
}
