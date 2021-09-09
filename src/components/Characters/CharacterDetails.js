import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CHARACTERS_PAGE_URL } from "../../api/rickNMortyApi";
import { Loading } from "../Loading/Loading";

export const CharacterDetails = ({ match }) => {
  const { id } = match.params;
  const [characterDetails, setCharacterDetails] = useState();

  useEffect(() => {
    try {
      fetch(`${CHARACTERS_PAGE_URL}/${id}`)
        .then((res) => res.json())
        .then((res) => setCharacterDetails(res))
        .catch((err) => console.log(err));
    } catch (e) {
      console.log(e);
    }
  }, [id]);

  if (!characterDetails) {
    return <Loading />;
  }

  const {
    image,
    name,
    status,
    species,
    type,
    gender,
    origin,
    location,
    created,
  } = characterDetails;

  return (
    <div className="p-6">
      <Link
        to="/characters"
        className="text-green-500 text-base underline mb-0.5"
      >
        Back
      </Link>
      <div>
        <h2 className="text-2xl text-green-500 font-bold">Name: {name}</h2>
        <div className="flex flex-row mt-4 ">
          <div>
            <img
              alt={name}
              src={image}
              className="mr-6 border rounded-full"
            ></img>
          </div>
          <div className="grid-flow-row">
            <ul className="text-green-700 text-base font-bold">
              <li>Gender: {gender}</li>
              <li>Species: {species}</li>
              <li>Type: {type}</li>
              <li>Origin: {origin.name}</li>
              <li>
                Location:
                <Link to={`/locations/${location.url.split("/").pop()}`}>
                  {location.name}
                </Link>
              </li>
              <li>Status: {status}</li>
              <li>Created: {created}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
