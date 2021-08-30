import React, { useState, useEffect } from "react";

import { LOCATIONS_PAGE_URL } from "../../api/rickNMortyApi";
import { Loading } from "../Loading/Loading";
import { Location } from "./Location";
import { Pagination } from "../Pagination/Pagination";

export const Locations = () => {
  const [locations, setLocations] = useState();

  useEffect(() => {
    try {
      fetch(LOCATIONS_PAGE_URL)
        .then((res) => res.json())
        .then(
          (res) =>
            res &&
            res.results &&
            Array.isArray(res.results) &&
            setLocations(res.results)
        )
        .catch((err) => console.log(err));
    } catch (e) {
      console.log(e);
    }
  }, []);

  if (!locations) {
    return <Loading />;
  }

  return (
    <div className="p-4">
      <h1 className="my-2 text-left text-2xl text-green-500 font-bold uppercase ">
        Locations
      </h1>
      <Pagination data={locations} pageLimit={5} />
      <div className="grid grid-flow-col grid-cols-5 grid-rows-4 gap-4 ">
        {locations.map((location) => {
          return (
            <div
              key={location.id}
              className="bg-green-200 shadow-md cursor-pointer rounded-lg text-center p-2 text-green-700 transform hover:scale-105 transition-all"
            >
              <Location location={location} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
