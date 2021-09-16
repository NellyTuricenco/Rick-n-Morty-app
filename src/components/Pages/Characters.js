import { useState, useEffect } from "react";

import { Pagination } from "../Pagination";
import { CharactersList } from "../CharactersList";
import { fetchCharacters } from "../../api/repository";

export const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [charactersPerPage] = useState(20);

  useEffect(() => {
    fetchCharacters().then(({ results }) => {
      if (results && Array.isArray(results)) {
        setCharacters(results);
      }
    });
  }, []);

  const changePages = (page) => {
    console.log(page);
    setCurrentPage(page);
    console.log(currentPage);
  };

  const lastCharacterIndex = currentPage * charactersPerPage;
  const firstCharacterIndex = lastCharacterIndex - charactersPerPage;
  const currentPages = characters.slice(
    firstCharacterIndex,
    lastCharacterIndex
  );

  return (
    <div>
      <h1 className="display-3">Characters</h1>
      <Pagination currentPage={1} pages={5} clickHandler={changePages} />
      <CharactersList characters={currentPages} />
    </div>
  );
};
