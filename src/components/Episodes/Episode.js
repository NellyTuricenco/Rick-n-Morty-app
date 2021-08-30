import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";

export const Episode = ({ episode }) => {
  const { name, air_date, created, id, characters } = episode;
  const history = useHistory();
  const { url } = useRouteMatch();

  return (
    <div onClick={() => history.push(`${url}/${id}`)}>
      <div>
        <h2 className="font-bold text-xl underline">{name}</h2>
        <ul>
          <li>Air date: {air_date}</li>
          <li>Created: {created}</li>
          <li>Characters: {characters.length}</li>
        </ul>
      </div>
    </div>
  );
};
