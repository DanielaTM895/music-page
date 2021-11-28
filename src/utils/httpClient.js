const artistAPI = "https://theaudiodb.com/api/v1/json/2/search.php?s=";
const songAPI = "https://api.lyrics.ovh/v1/";

export function artist(artist) {
  return fetch(artistAPI + artist).then((result) => result.json());
}
export function song(artist, song) {
  return fetch(songAPI + artist + "/" +song).then((result) => result.json());
}
 