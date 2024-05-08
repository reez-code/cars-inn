import Car from "./Car";

function Collection({ cars }) {
  return (
    <div className="grid grid-cols-4 gap-4 my-10">
      {cars.map((car) => (
        <Car key={car.id} {...car} />
      ))}
    </div>
  );
}

export default Collection;
