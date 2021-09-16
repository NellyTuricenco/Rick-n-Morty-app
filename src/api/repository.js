import { CHARACTERS_PAGE_URL } from "./rickNMortyApiConst";

export function fetchCharacters() {
  return fetch(CHARACTERS_PAGE_URL)
    .then((res) => res.json())
    .catch((err) => console.log(err));
}

export function fetchCharacter(id) {
  return fetch(`${CHARACTERS_PAGE_URL}/${id}`)
    .then((res) => res.json())
    .catch((err) => console.log(err));
}
