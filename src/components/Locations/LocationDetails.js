import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LOCATIONS_PAGE_URL } from "../../api/rickNMortyApi";
import { Loading } from "../Loading/Loading";

export const LocationDetails = ({ match, history }) => {
  const { id } = match.params;
  const [locationDetails, setLocationDetails] = useState();
  const [residents, setResidents] = useState();

  useEffect(() => {
    try {
      fetch(`${LOCATIONS_PAGE_URL}/${id}`)
        .then((res) => res.json())
        .then((res) => {
          setLocationDetails(res);
          if (res.residents && Array.isArray(res.residents)) {
            Promise.all(res.residents.map((resident) => fetch(resident))).then(
              (responses) =>
                Promise.all(responses.map((res) => res.json())).then((res) =>
                  setResidents(res)
                )
            );
          }
        })
        .catch((err) => console.log(err));
    } catch (e) {
      console.log(e);
    }
  }, [id]);

  if (!locationDetails) {
    return <Loading />;
  }

  const { name, type, dimension } = locationDetails;
  return (
    <div className="p-4">
      <Link
        to="/locations"
        className="text-green-500 text-base underline mb-0.5"
      >
        Back
      </Link>
      <h2 className="text-2xl text-green-500">{name}</h2>
      <ul className="text-green-700 text-base font-bold">
        <li>Dimension: {dimension}</li>
        <li>Type: {type}</li>
      </ul>
      <h3 className="text-green-700 text-base font-bold mb-4">Residents:</h3>
      <div className="grid  grid-cols-5  gap-4 ">
        {residents &&
          Array.isArray(residents) &&
          residents.map(({ id, name, image }) => {
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
