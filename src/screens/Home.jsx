import React from "react";
import { Link } from "react-router-dom";
import homeData from "../data/home";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center pb-[40px] bg-gray-200 gap-[50px]">
      <div className="w-full flex flex-col items-center gap-[40px]">
        <h2 className="h-[80px] flex justify-center items-center w-full bg-[#16161d] text-white font-bold text-3xl uppercase">
          Color Factory
        </h2>
        <Link
          to="/add-color"
          className="py-[10px] px-[15px] bg-slate-800 text-white font-bold text-lg"
        >
          Add a color
        </Link>
      </div>

      <div className="flex flex-col justify-center items-center sm:items-start gap-[20px]">
        <h2>Click on a color to view it's hex code.</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[20px] place-items-center place-content-center">
          {homeData?.map(({ id, name, link }) => (
            <Link
              key={id}
              className="w-[250px] lg:w-[250px] h-[250px] flex flex-col justify-between bg-white rounded-lg overflow-hidden shadow-md"
              to={link}
            >
              <div
                style={{ backgroundColor: name }}
                className="w-full h-[80%]"
              ></div>
              <span
                className="capitalize pb-[10px] pl-[10px] drop-shadow-lg font-bold text-lg"
                style={{ textShadow: "2px 2px 4px #888" }}
              >
                {name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
