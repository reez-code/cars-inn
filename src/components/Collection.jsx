import Car from "./Car";

function Collection({ cars, onAddToLibrary, addedCars }) {
  return (
    <div className="grid grid-cols-4 gap-4 my-10">
      {cars.map((car) => (
        <Car
          key={car.id}
          {...car}
          onAddToLibrary={onAddToLibrary}
          addedCars={addedCars}
        />
      ))}
    </div>
  );
}

export default Collection;
