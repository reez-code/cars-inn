// CarLibrary.jsx
import React from "react";
import AddedToLibrary from "./AddedToLibrary";

function CarLibrary({ cars }) {
  console.log(cars);
  return (
    <div className="grid grid-cols-4 gap-4 my-10">
      {cars.map((car) => (
        <AddedToLibrary key={car.id} {...car} />
      ))}
    </div>
  );
}

export default CarLibrary;
