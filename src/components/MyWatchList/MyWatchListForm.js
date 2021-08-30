import React, { useState, useEffect, useRef } from "react";

export const MyWatchListForm = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <form
      className="m-7 h-5 w-full flex flex-row align-center "
      onSubmit={handleSubmit}
    >
      {props.edit ? (
        <>
          <input
            className="w-60 h-10 p-2 bg-green-100 border-none outline-none bg-transparent shadow-inner shadow-md rounded-md"
            type="text"
            value={input}
            placeholder="Update the episode"
            onChange={handleChange}
            ref={inputRef}
          ></input>
          <button className="w-20 h-10 p-2  ml-4  bg-green-200 hover:bg-green-300 transition-all cursor-pointer tracking-widest border-none outline-none bg-transparent  shadow-md rounded-md">
            <h2 className="text-green-500 font-bold">Update</h2>
          </button>
        </>
      ) : (
        <>
          <input
            className="w-60 h-10 p-2 bg-green-100 border-none outline-none bg-transparent shadow-inner shadow-md rounded-md"
            type="text"
            value={input}
            placeholder="Add the episode"
            onChange={handleChange}
            ref={inputRef}
          ></input>
          <button className="w-20 h-10 p-2  ml-4 bg-green-200 hover:bg-green-300 transition-all cursor-pointer tracking-widest border-none outline-none bg-transparent  shadow-md rounded-md">
            <h2 className="text-green-500 font-bold">Add</h2>
          </button>
        </>
      )}
    </form>
  );
};
