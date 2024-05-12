// Home.jsx
import React, { useState, useEffect } from "react";
import Collection from "../components/Collection";
import Navbar from "../components/Navbar";
import Add from "../components/Add";
import Library from "./Library";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [cars, setCars] = useState([]);
  const [addedCars, setAddedCars] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/cars")
      .then((res) => res.json())
      .then((data) => {
        setCars(data);
      })
      .catch((error) => console.error("Error fetching cars:", error));
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredCars = cars.filter((car) => {
    return car.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const addToLibrary = (car) => {
    console.log("Adding car:", car)
    setAddedCars(prevCars => [...prevCars, car]);
    console.log("Added Cars:", addedCars)
  };

  return (
    <div>
      <Navbar onSearch={handleSearch} />
      <Add addCars={addToLibrary} />
      <Collection
        cars={filteredCars}
        addedCars={addedCars}
        onAddToLibrary={addToLibrary}
      />
      <Library cars={addedCars} />
    </div>
  );
}

export default Home;
