import React from "react";
import { Link, useParams } from "react-router-dom";

const DisplayColor = () => {
  // decalre variables to match route parameters
  const { colorName, colorCode } = useParams();

  return (
    <div
      style={{ backgroundColor: "#" + colorCode }}
      className="h-screen flex justify-center items-center flex-col"
    >
      <div className="flex flex-col gap-[10px] justify-center items-center p-[20px] bg-[#16161d] text-white">
        <h1 className="text-xl ">
          This is <span className="font-bold capitalize"> {colorName}</span>{" "}
          with hex <span className="font-bold"> #{colorCode}</span>
        </h1>
        <Link to="/" className="text-cyan-500 hover:text-cyan-300">
          Home
        </Link>
      </div>
    </div>
  );
};

export default DisplayColor;
