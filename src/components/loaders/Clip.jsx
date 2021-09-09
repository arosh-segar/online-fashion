import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

const Clip = () => {
  return (
    <div className="flex flex-row justify-center items-center mt-10">
      <ClipLoader color={"#fff"} loading={true} size={150} />
    </div>
  );
};

export default Clip;
