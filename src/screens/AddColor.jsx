import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const AddColor = () => {
  const [user, setUser] = useState({
    colorName: "",
    colorCode: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("clicked");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Enter a Color</span>
          <input
            type="color"
            onChange={(e) => setUser(user, ...e.target.value)}
          />
        </label>
        <label>
          <span>Select Color</span>
          <input
            type="color"
            onChange={(e) => setUser(user, ...e.target.value)}
          />
        </label>
        <button>Add Color</button>
      </form>

      <Link to="/">Return home</Link>
    </div>
  );
};

export default AddColor;
