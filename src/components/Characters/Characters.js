import { useState, useEffect } from "react";

import { CHARACTERS_PAGE_URL } from "../../api/rickNMortyApi";
import { Loading } from "../../components/Loading/Loading";
import { Character } from "./Character";
import { Pagination } from "../Pagination/Pagination";
import { Human } from "../../assets/CharactersFilter/SpeciesFilter/Human";
import { Alien } from "../../assets/CharactersFilter/SpeciesFilter/Alien";
import { Unknown } from "../../assets/CharactersFilter/SpeciesFilter/Unknown";

export const Characters = () => {
  const [characters, setCharacters] = useState();
  const [speciesFilter, setSpeciesFilter] = useState("");
  const [status, setStatus] = useState("");
  useEffect(() => {
    try {
      fetch(CHARACTERS_PAGE_URL)
        .then((res) => res.json())
        .then(({ results }) => {
          if (results && Array.isArray(results)) {
            setCharacters(results);
          }
        })
        .catch((err) => console.log(err));
    } catch (e) {
      console.log(e);
    }
  }, []);

  const handleSpeciesChange = (e) => {
    console.log("[e.target.value]", e.target.value);
    setSpeciesFilter(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  if (!characters) {
    return <Loading />;
  }

  let filteredCharacters = characters;

  if (speciesFilter) {
    filteredCharacters = filteredCharacters.filter(
      (c) => c.species === speciesFilter
    );
  }

  if (status) {
    filteredCharacters = filteredCharacters.filter((c) => c.status === status);
  }
  return (
    <div className="p-4 font-mono text-green-500 ">
      <div className="flex flex-row">
        <div className="m-4 ">
          <label>Species</label>
          <select name="species" id="species" onChange={handleSpeciesChange}>
            <option value="all">all</option>
            <option value="human">human</option>
            <option value="alien">alien</option>
            <option value="unknown">unknown</option>
          </select>
        </div>
        <div className="m-4">
          <label>Status</label>
          <select name="status" id="status" onChange={handleStatusChange}>
            <option value="all">all</option>
            <option value="alive">alive</option>
            <option value="dead">dead</option>
            <option value="unknown">unknown</option>
          </select>
        </div>
        <div className="m-4">
          <label>Gender</label>
          <select name="gender" id="gender">
            <option value="all">all</option>
            <option value="female">female</option>
            <option value="male">male</option>
            <option value="genderless">genderless</option>
            <option value="unknown">unknown</option>
          </select>
        </div>
      </div>
      <h1 className="my-2 text-left text-3xl text-green-500 font-bold uppercase ">
        Characters
      </h1>
      <Pagination data={characters} pageLimit={5} />
      <div className="grid grid-flow-col grid-cols-5 grid-rows-4 gap-4 ">
        {filteredCharacters.map((character) => (
          <div
            key={character.id}
            className="bg-green-200 shadow-md cursor-pointer rounded-lg text-center p-2 text-green-700 "
          >
            <Character character={character} />
          </div>
        ))}
      </div>
    </div>
  );
};
