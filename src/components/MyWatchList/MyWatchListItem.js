import React, { useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { TiEdit } from "react-icons/ti";

import { MyWatchListForm } from "./MyWatchListForm";

export const MyWatchListItem = ({
  watchLists,
  completeWatchList,
  removeWatchList,
  updateWatchList,
}) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateWatchList(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <MyWatchListForm edit={edit} onSubmit={submitUpdate} />;
  }

  return watchLists.map((watchList, index) => (
    <div
      className={watchList.isComplete ? "checked" : ""}
      key={index}
      className="flex flex-row shadow-md tw-scale-50 rounded-md flex justify-between px-4  text-green-700"
    >
      <div
        key={watchList.id}
        onClick={() => completeWatchList(watchList.id)}
        className="my-4 p-3 capitalize font-bold text-green-500"
      >
        {watchList.text}
      </div>
      <div className="flex my-4 p-3">
        <RiCloseCircleLine
          onClick={() => removeWatchList(watchList.id)}
          className="mr-4 h-5 w-5 "
        />
        <TiEdit
          onClick={() => setEdit({ id: watchList.id, value: watchList.text })}
          className="h-5 w-5 "
        />
      </div>
    </div>
  ));
};
