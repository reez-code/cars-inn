// CarLibrary.jsx
import React from 'react';
import Car from './Car';

function CarLibrary({ cars, onAddToLibrary }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {cars.map((car, index) => (
        <Car
          key={index} 
          image={car.image}
          title={car.title}
          description={car.description}
          onAddToLibrary={onAddToLibrary} // Pass the add function down to Car
        />
      ))}
    </div>
  );
}

export default CarLibrary;
