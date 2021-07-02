import React from "react";
import { Link } from "react-router-dom";

export default function NewColors() {
  const newColorsFromLocalStorage = JSON.parse(localStorage.getItem("store"));
  return (
    <>
      {newColorsFromLocalStorage.map(({ colorName, color }) => (
        <p key={color}>
          <Link to={`/${colorName}/${color.replace("#", "")}`}>
            {colorName}
          </Link>
        </p>
      ))}
    </>
  );
}
