import React, { useState } from "react";

function Box({ colors }) {
  return (
    <div className="flex">
      {colors.map((color, index) => (
        <div
          key={index}
          className={`flex flex-col box-border`}
          style={{ backgroundColor: color.code }}
        >
          <div className="box-border h-32 w-32 p-4 border-4 border-stone-300 rounded text-yellow-100">
            {color.name}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Box;
