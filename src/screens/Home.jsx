import React from "react";
import { Link } from "react-router-dom";
import homeData from "../data/home";

const Home = () => {
  return (
    <div>
      <div>
        <h2>Welcome to the Color Factory</h2>
        <h1>
          <Link to="/add-color">Add a color</Link>
        </h1>
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
