import React from "react";
import { Link } from "react-router-dom";
import homeData from "../data/home";

const Home = () => {
  return (
    <div className="min-h-screen p-[20px] flex flex-col items-center ">
      <div>
        <h2>Welcome to the Color Factory</h2>
        <Link to="/add-color">Add a color</Link>
      </div>

      <div>
        <h2>Please select a color</h2>
        {homeData?.map(({ id, name, link }) => (
          <div key={id}>
            <Link to={link}>{name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
