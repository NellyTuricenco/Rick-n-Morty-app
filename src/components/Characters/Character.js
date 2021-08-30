import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";

// import { Modal } from "../ModalWindow/Modal";

export const Character = ({ character }) => {
  const { name, image, id } = character;
  const history = useHistory();
  const { url } = useRouteMatch();

  return (
    <div
      className="grid grid-flow-row p-2"
      onClick={() => history.push(`${url}/${id}`)}
    >
      <div>
        <img
          alt={name}
          src={image}
          className="rounded-full  border-2 border-solid border-green-700 cursor-pointer"
        />
      </div>
      <div className="flex flex-col ">
        <label className="flex justify-center align-center text-xl text-center mt-4">
          {name}
        </label>
      </div>

      {/* <Modal /> */}
    </div>
  );
};
