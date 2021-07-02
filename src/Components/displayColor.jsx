import React from "react";
import { Link } from "react-router-dom";

const DisplayColor = ({
  match: {
    params: { colorName, colorCode },
  },
}) => {
  //

  return (
    <div className="container" style={{ backgroundColor: "#" + colorCode }}>
      <div>
        <h1>
          This is {colorName} with HEX #{colorCode}
          <p>
            <Link to="/">Go back</Link>
          </p>
        </h1>
      </div>
    </div>
  );
};

export default DisplayColor;
