import React, { useState } from "react";

const Header = () => {
  return (
    <div className="bg-gray-500 w-6/12 h-72 p-8">
      <div className=" bg-black">
        <a
          href="#"
          className="text-4xl font-sans font-black tracking-normal text-white"
        >
          Arosh Segar
        </a>
        <p className="font-sans text-xl tracking-wider text-white mt-3">
          I'm a passionate{" "}
          <span className="border-b-2 border-green-500">
            software engineering
          </span>{" "}
          undergraduate
        </p>

        <div className="grid grid-cols-3 gap-4 mt-5 w-3/4 text-white">
          <div>1</div>
          <div>1</div>
          <div>1</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
