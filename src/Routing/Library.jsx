import React from "react";
import CarLibrary from "../components/CarLibrary";

function Library({ cars = [] }) {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold my-8">My Library</h1>
      {cars.length > 0 ? (
        <CarLibrary cars={cars} />
      ) : (
        <p>Your library is empty. Add some cars!</p>
      )}
    </div>
  );
}

export default Library;
