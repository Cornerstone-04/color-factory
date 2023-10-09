import { useLiveQuery } from "dexie-react-hooks";
import React from "react";
import { Link } from "react-router-dom";
import { newColors } from "../screens/AddColor";
import { Trash } from "./Icons";

const ColorCard = () => {
  const color = useLiveQuery(() => newColors.toArray(), []);
  const deleteTask = async (id) => await newColors.delete(id);

  return (
    <>
      {color?.map(({ colorName, colorCode, id }) => (
        <div
          key={id}
          className="w-[250px] lg:w-[250px] h-[250px] flex flex-col justify-between bg-white rounded-lg overflow-hidden shadow-md"
        >
          <Link
            to={`/${colorName.toLowerCase()}/${colorCode.replace("#", "")}`}
            style={{ backgroundColor: colorCode }}
            className="w-full h-[80%]"
          ></Link>
          <div className="flex justify-between w-full px-[10px] pb-[10px]">
            {" "}
            <Link
              to={`/${colorName.toLowerCase()}/${colorCode.replace("#", "")}`}
              className="capitalize drop-shadow-lg font-bold text-base text-slate-800"
              style={{ textShadow: "2px 2px 4px #888" }}
            >
              {colorName}
            </Link>
            <Trash
              onClick={() => {
                deleteTask(id);
              }}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default ColorCard;
