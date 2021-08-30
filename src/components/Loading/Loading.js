import React from "react";

export const Loading = (props) => {
  return (
    <div>
      <button type="button" className="bg-indigo-600 ..." disabled>
        <svg
          className="animate-spin h-5 w-5 mr-3 ..."
          viewBox="0 0 24 24"
        ></svg>
        Processing
      </button>
    </div>
  );
};
