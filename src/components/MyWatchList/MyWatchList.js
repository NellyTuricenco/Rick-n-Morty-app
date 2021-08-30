import React, { useState, useEffect } from "react";

import { MyWatchListForm } from "./MyWatchListForm";
import { MyWatchListItem } from "./MyWatchListItem";

export const MyWatchList = () => {
  const [watchLists, setWatchLists] = useState(() => {
    const data = localStorage.getItem("my-watchList");
    return data ? JSON.parse(data) : [];
  });

  useEffect(() => {
    localStorage.setItem("my-watchList", JSON.stringify(watchLists));
  }, [watchLists]);

  const addWatchList = (watchList) => {
    if (!watchList.text || /^\s*$/.test(watchList.text)) {
      return;
    }
    const newWatchList = [watchList, ...watchLists];

    setWatchLists(newWatchList);
  };

  const updateWatchList = (watchListId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }
    setWatchLists((prev) =>
      prev.map((item) => (item.id === watchListId ? newValue : item))
    );
  };

  const removeWatchList = (id) => {
    const removeArr = [...watchLists].filter(
      (watchList) => watchList.id !== id
    );
    setWatchLists(removeArr);
  };

  const completeWatchList = (id) => {
    const updatedWatchList = watchLists.map((watchList) => {
      if (watchList.id === id) {
        watchList.isComplete = !watchList.isComplete;
      }
      return watchList;
    });
    setWatchLists(updatedWatchList);
  };
  console.log(watchLists);
  return (
    <div className="w-96 h-full  bg-gray-200 absolute my-10 mx-80 transform translate-x-1/2 shadow-lg shadow-inner rounded-lg">
      <h1 className="my-2 text-center text-2xl text-green-500 font-bold uppercase">
        Watch later
      </h1>
      <MyWatchListForm onSubmit={addWatchList} />
      <MyWatchListItem
        watchLists={watchLists}
        completeWatchList={completeWatchList}
        removeWatchList={removeWatchList}
        updateWatchList={updateWatchList}
      />
    </div>
  );
};
