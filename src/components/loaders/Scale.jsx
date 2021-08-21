import React from "react";
import ScaleLoader from "react-spinners/ScaleLoader";

const Scale = () => {

    return(
        <div className="flex flex-row justify-center items-center mt-10">
            <ScaleLoader color={"#ffffff"} loading={true} size={200} />
        </div>
    )
}

export default Scale;