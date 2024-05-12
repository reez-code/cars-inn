// CarLibrary.jsx
import React from "react";
import Car from "./Car";

function CarLibrary({ cars }) {
  return (
    <div className="grid grid-cols-4 gap-4 my-10">
      {cars.map((car) => (
        <Car key={car.id} {...car} />
      ))}
    </div>
  );
}

export default CarLibrary;
