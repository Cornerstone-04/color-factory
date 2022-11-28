import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../data/db";

// destructure database
export const { newColors } = db;

const AddColor = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    colorName: "",
    colorCode: "",
  });

  // add new color
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user.colorCode && user.colorName) {
      // if colorCode and colorName are present, add them to newColors database
      await newColors.add({
        colorName: user.colorName,
        colorCode: user.colorCode,
      });

      // set color name and color code to empty values
      setUser({ ...user, colorName: "" });
      setUser({ ...user, colorCode: "" });
      toast.success("Color Added");

      // return to homepage after 1 second
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } else {
      // if one or both inputs is empty, display error message
      toast.error("Please fill all input!");
    }
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center gap-[40px] bg-gray-200">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-[20px] w-full max-w-[500px] px-[50px]"
      >
        <label className="flex flex-col font-semibold text-lg gap-[6px] w-full">
          <span>Enter a Color</span>
          <input
            type="text"
            // on input, set color name to input value
            onChange={(e) => setUser({ ...user, colorName: e.target.value })}
            value={user.colorName}
            className="w-full h-[50px] border border-slate-800 outline-none indent-2"
          />
        </label>
        <label className="flex flex-col font-semibold text-lg gap-[6px]">
          <span>Select Color</span>
          <input
            type="color"
            // on input, set color code to input value
            onChange={(e) => setUser({ ...user, colorCode: e.target.value })}
            className="w-full h-[50px] rounded-lg overflow-hidden"
            value={user.colorCode}
          />
        </label>
        <button className="h-[50px] w-[150px] flex justify-center items-center bg-slate-800 font-bold text-white text-lg">
          Add Color
        </button>
      </form>

      <Link
        to="/"
        className="text-cyan-500 hover:text-cyan-300 bg-slate-800 p-[10px] "
      >
        Return home
      </Link>
    </div>
  );
};

export default AddColor;
