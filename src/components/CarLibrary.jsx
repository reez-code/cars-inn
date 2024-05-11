import React from "react";
import Car from "../components/Car";

function CarLibrary({ cars, onAddToLibrary }) {
  const myLibrary = cars.map((car) => {
    return (
      <div style={{ margin: "10px" }}>
        <Car  key={car.id} {...car} onAddToLibrary={onAddToLibrary} />
      </div>
    );
  });

  return <div className="grid grid-cols-4 gap-4 my-10">{myLibrary}</div>;
}

export default CarLibrary;
