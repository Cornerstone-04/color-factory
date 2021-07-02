import React from "react";
import { Link } from "react-router-dom";
import NewColors from "./NewColors";
function Home() {
  return (
    <div className="colorfactory">
      <div className="header">
        <h2>Welcome to the color Factory</h2>
        <h1>
          <Link to="/Add">Add a Color</Link>
        </h1>
      </div>

      <div className="select">
        <h2>Please Select a Color</h2>
        {localStorage.getItem("store") && <NewColors />}
        <div>
          <p>
            <Link to="/red/ff0000">red</Link>
          </p>
        </div>
        <div>
          <p>
            <Link to="/green/00ff00">green</Link>
          </p>
        </div>
        <div>
          <p>
            <Link to="/blue/0000ff">blue</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
