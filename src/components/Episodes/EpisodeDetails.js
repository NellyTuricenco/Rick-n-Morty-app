import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { EPISODES_PAGE_URL } from "../../api/rickNMortyApi";
import { Loading } from "../Loading/Loading";

export const EpisodeDetails = ({ match, history }) => {
  const { id } = match.params;
  const [episodeDetails, setEpisodeDetails] = useState();
  const [characters, setCharacters] = useState();

  useEffect(() => {
    try {
      fetch(`${EPISODES_PAGE_URL}/${id}`)
        .then((res) => res.json())
        .then((res) => {
          setEpisodeDetails(res);
          if (res.characters && Array.isArray(res.characters)) {
            Promise.all(
              res.characters.map((character) => fetch(character))
            ).then((responses) =>
              Promise.all(responses.map((res) => res.json())).then((res) =>
                setCharacters(res)
              )
            );
          }
        })
        .catch((err) => console.log(err));
    } catch (e) {
      console.log(e);
    }
  }, [id]);

  if (!episodeDetails) {
    return <Loading />;
  }

  const { name, air_date, created } = episodeDetails;
  return (
    <div className="p-4">
      <Link
        to="/episodes"
        className="text-green-500 text-base underline mb-0.5"
      >
        Back
      </Link>
      <h2 className="text-2xl text-green-500 font-bold">{name}</h2>
      <div>
        <ul className="text-green-700 text-base font-bold">
          <li>Air date: {air_date}</li>
          <li>Created: {created}</li>
        </ul>
        <h3 className="text-green-700 text-base font-bold mb-4">Characters:</h3>
      </div>
      <div className="grid  grid-cols-5  gap-4 ">
        {characters &&
          Array.isArray(characters) &&
          characters.map(({ id, name, image }) => {
            return (
              <div key={id} onClick={() => history.push(`/characters/${id}`)}>
                <img
                  src={image}
                  alt={name}
                  title={name}
                  className="rounded-full w-28 h-28 border-2 border-solid border-green-700 cursor-pointer"
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};
