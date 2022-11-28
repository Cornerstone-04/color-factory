import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { ColorCard, Trash } from "../components";
import homeData from "../data/home";
import { newColors } from "./AddColor";

const Home = () => {
  const [displayArrow, setDisplayArrow] = useState(false);

  const listenToScroll = () => {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      setDisplayArrow(true);
    } else {
      setDisplayArrow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
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
      {displayArrow && (
        <svg
          className="w-6 h-6 fixed bottom-[20px] right-[10px]"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
            onClick={scrollUp}
          ></path>
        </svg>
      )}
    </div>
  );
};

export default Home;
