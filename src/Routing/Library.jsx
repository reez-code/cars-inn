import React from "react";
import CarLibrary from "../components/CarLibrary";
import { useLocation } from "react-router-dom";

function Library() {
  const location = useLocation();
  console.log(location);
  console.log(location.state);

  
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold my-8">My Library</h1>

      <CarLibrary cars={location.state} />
      
    </div>
  );
}

export default Library;
