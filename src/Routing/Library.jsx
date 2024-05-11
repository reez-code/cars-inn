import React, { useState, useEffect } from "react";
import CarLibrary from "../components/CarLibrary";

function Library() {
  // State to track cars in the library
  const [library, setLibrary] = useState([]);

  // Function to add a car to the library
  const addToLibrary = (car) => {
    setLibrary((prevLibrary) => [...prevLibrary, car]);
  };

  // useEffect to fetch initial data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/cars");
        const data = await response.json();
        setLibrary(data.cars);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold my-8">Car Library</h1>
      <CarLibrary cars={library} onAddToLibrary={addToLibrary} />
    </div>
  );
}

export default Library;
