import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ColorCard from "../components/ColorCard";
import { Arrow } from "../components/Icons";
import homeData from "../data/home";
import { newColors } from "./AddColor";

const Home = () => {
  const [displayArrow, setDisplayArrow] = useState(false);

  //display arrow on page scroll
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

  // listen for page scroll
  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  //scroll up function
  const scrollUp = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col items-center pb-[40px] bg-gray-200 gap-[50px]">
      <div className="w-full flex flex-col items-center gap-[40px]">
        <h2 className="h-[80px] flex justify-center items-center w-full bg-slate-800 text-white font-bold text-2xl md:text-3xl uppercase">
          Color Factory
        </h2>
        <Link
          to="/add-a-color"
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
              </div>
            </div>
          ))}

          {/* if newColors database exists, display new color cards */}
          {newColors && <ColorCard />}
        </div>
      </div>

      {/* if true, display arrow */}
      {displayArrow && (
        <button
          className="flex justify-center items-center w-10 h-10 fixed bottom-[20px] right-[10px] cursor-pointer"
          onClick={scrollUp}
        >
          <Arrow />
        </button>
      )}
    </div>
  );
};

export default Home;
