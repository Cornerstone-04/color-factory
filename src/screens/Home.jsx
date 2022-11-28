import React from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { ColorCard, Trash } from "../components";
import homeData from "../data/home";
import { newColors } from "./AddColor";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center pb-[40px] bg-gray-200 gap-[50px]">
      <div className="w-full flex flex-col items-center gap-[40px]">
        <h2 className="h-[80px] flex justify-center items-center w-full bg-[#16161d] text-white font-bold text-2xl md:text-3xl uppercase">
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
            <div
              key={id}
              className="w-[250px] lg:w-[250px] h-[250px] flex flex-col justify-between bg-white rounded-lg overflow-hidden shadow-md"
            >
              <Link
                to={link}
                style={{ backgroundColor: name }}
                className="w-full h-[80%]"
              ></Link>
              <div className="flex justify-between w-full px-[10px] pb-[10px]">
                {" "}
                <Link
                  to={link}
                  className="capitalize drop-shadow-lg font-bold text-base text-slate-800"
                  style={{ textShadow: "2px 2px 4px #888" }}
                >
                  {name}
                </Link>
                <Trash
                  onClick={() => {
                    toast.error("Default colors cannot be deleted");
                  }}
                />
              </div>
            </div>
          ))}
          {newColors && <ColorCard />}
        </div>
      </div>
    </div>
  );
};

export default Home;
