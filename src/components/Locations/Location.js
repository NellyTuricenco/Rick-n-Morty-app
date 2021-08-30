import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";

export const Location = ({ location }) => {
  const { name, type, dimension, residents, id } = location;
  const history = useHistory();
  const { url } = useRouteMatch();

  return (
    <div onClick={() => history.push(`${url}/${id}`)}>
      <div>
        <h2 className="font-bold text-xl underline">{name}</h2>
        <ul>
          <li>Dimension: {dimension}</li>
          <li>Type: {type}</li>
          <li>Residents: {residents.length}</li>
        </ul>
      </div>
    </div>
  );
};
