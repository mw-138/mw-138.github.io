export async function fetchLocalData(
  url: string,
  init?: RequestInit | undefined,
): Promise<any> {
  const urlPrefix =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://mw-138.github.io/";
  const response = await fetch(`${urlPrefix}/${url}`, init);
  return await response.json();
}
