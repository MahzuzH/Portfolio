import assert from "node:assert/strict";
import { test } from "node:test";
import { parsePlaylistId } from "./spotify.ts";

test("playlist id from real Spotify link shapes", () => {
  const id = "2vYTGA9oKjuxxxzBxCgOHT";
  assert.equal(parsePlaylistId(`https://open.spotify.com/playlist/${id}?si=abc`), id);
  assert.equal(parsePlaylistId(`https://open.spotify.com/intl-id/playlist/${id}`), id);
  assert.equal(parsePlaylistId(`https://open.spotify.com/embed/playlist/${id}`), id);
  assert.equal(parsePlaylistId("https://open.spotify.com/artist/abc"), "");
  assert.equal(parsePlaylistId("not a url"), "");
  assert.equal(parsePlaylistId(""), "");
});
