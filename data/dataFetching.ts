export async function fetchData(url: string): Promise<any> {
  const urlPrefix =
    process.env.NODE_ENV === "production"
      ? "https://mw-138.github.io/"
      : "http://localhost:3000";
  const response = await fetch(`${urlPrefix}/${url}`);
  return await response.json();
}
