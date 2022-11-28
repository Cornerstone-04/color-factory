import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { db } from "../data/db";

export const { newColors } = db;

const AddColor = () => {
  const [user, setUser] = useState({
    colorName: "",
    colorCode: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user.colorCode && user.colorName) {
      await newColors.add({
        colorName: user.colorName,
        colorCode: user.colorCode,
      });
      setUser({ ...user, colorName: "" });
      setUser({ ...user, colorCode: "" });
      
      toast.success("Color Added");
    } else {
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
            onChange={(e) => setUser({ ...user, colorName: e.target.value })}
            value={user.colorName}
            className="w-full h-[50px] border border-slate-800 outline-none indent-2"
          />
        </label>
        <label className="flex flex-col font-semibold text-lg gap-[6px]">
          <span>Select Color</span>
          <input
            type="color"
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
