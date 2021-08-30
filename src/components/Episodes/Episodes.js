import React, { useState, useEffect } from "react";

import { EPISODES_PAGE_URL } from "../../api/rickNMortyApi";
import { Loading } from "../Loading/Loading";
import { Episode } from "./Episode";
import { Pagination } from "../Pagination/Pagination";

export const Episodes = () => {
  const [episodes, setEpisodes] = useState();

  useEffect(() => {
    try {
      fetch(EPISODES_PAGE_URL)
        .then((res) => res.json())
        .then(
          (res) =>
            res &&
            res.results &&
            Array.isArray(res.results) &&
            setEpisodes(res.results)
        )
        .catch((err) => console.log(err));
    } catch (e) {
      console.log(e);
    }
  }, []);

  if (!episodes) {
    return <Loading />;
  }

  return (
    <div className="p-4">
      <h1 className="my-2 text-left text-2xl text-green-500 font-bold uppercase ">
        Episodes
      </h1>
      <Pagination data={episodes} pageLimit={5} />
      <div className="grid grid-flow-col grid-cols-5 grid-rows-4 gap-4 ">
        {episodes.map((episode) => {
          return (
            <div
              key={episode.id}
              className="bg-green-200 shadow-md cursor-pointer rounded-lg text-center p-2 text-green-700 transform hover:scale-105 transition-all"
            >
              <Episode episode={episode} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
