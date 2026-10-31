/** Takes `/playlist/<id>` from any Spotify playlist or embed link, ignoring locale prefixes and query strings. */
export function parsePlaylistId(url: string) {
  try {
    return new URL(url).pathname.match(/playlist\/([A-Za-z0-9]+)/)?.[1] ?? "";
  } catch {
    return "";
  }
}