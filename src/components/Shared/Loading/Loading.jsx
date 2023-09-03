import React from "react";
import { Circles } from "react-loader-spinner";

const Loading = () => {
  return (
    <div
      className="
      h-[70vh]
      flex 
      flex-col 
      justify-center 
      items-center 
    "
    >
      <Circles
        height="80"
        width="80"
        color="#1F2B40"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loading;
