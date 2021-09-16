import React, { useState, useEffect } from "react";
import { HUMAN_SPECIES_URL } from "../../../api/rickNMortyApiConst";

export const Human = ({ match }) => {
  const { species } = match.params;
  const [characterFilters, setCharacterFilters] = useState([]);
  useEffect(() => {
    try {
      fetch(`${HUMAN_SPECIES_URL}`)
        .then((res) => res.json())
        .then((res) => setCharacterFilters(res))
        .catch((err) => console.log(err));
    } catch (e) {
      console.log(e);
    }
  }, [species]);

  const { name, image } = characterFilters;

  return (
    <div>
      <h2>Name: {name}</h2>
      <div>
        <img alt={name} src={image}></img>
      </div>
    </div>
  );
};
