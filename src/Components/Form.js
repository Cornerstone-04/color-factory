import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { Route } from 'react-router-dom/Route'

const Form = (props) => {
  const [colorName, setColorName] = useState();
  const [color, setColor] = useState();

  function handleColor(e) {
    e.preventDefault();
    if (colorName && color) {
      let newColor = { colorName, color };
      localStorage.setItem("newColor", JSON.stringify(newColor));
      let store = JSON.parse(localStorage.getItem("store")) || [];
      store.push(newColor);
      localStorage.setItem("store", JSON.stringify(store));
      props.history.push('/')
    } else {
      return alert("Please fill all inputs!");
    }
  }

  return (
    <div className="addcolor">
      <div className="formdiv">
        <form>
          <div className="colorname">
            <label>Enter a Color</label>
            <input onChange={(e) => setColorName(e.target.value)} type="text" />
          </div>
          <div className="color">
            <label>Select Color</label>
            <input onChange={(e) => setColor(e.target.value)} type="color" />
          </div>
          <div className="btndiv">
            <button type="submit" className="addbtn" onClick={handleColor}>
              Add Color
            </button>
          </div>
        </form>
      </div>

      <div className="return">
        <Link to="/">
          <h3>Go back to Home</h3>
        </Link>
      </div>
    </div>
  );
};

export default Form;

/*Listen for an input change in text and color input boxes.
Listen for a click in the "Add Color " button
When the button is clicked, write a function to add a link with the input(text).value as the name*/
