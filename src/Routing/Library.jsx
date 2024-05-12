import React from "react";
import CarLibrary from "../components/CarLibrary";

function Library({ cars = [] }) {
  console.log("Library cars:", cars);
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold my-8">My Library</h1>
      
      <CarLibrary cars={cars} />
     
    </div>
  );
}

export default Library;
