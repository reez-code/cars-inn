// CarLibrary.jsx
import React from "react";
import Car from "./Car";

function CarLibrary({ cars, onAddToLibrary }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {cars.map((car) => (
        <Car
          key={car.id}
          image={car.image}
          title={car.title}
          description={car.description}
          onAddToLibrary={onAddToLibrary}
        />
      ))}
    </div>
  );
}

export default CarLibrary;
