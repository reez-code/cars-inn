import { useState, useEffect } from "react";
import Car from "../components/Car";
import Collection from "../components/Collection";
import Navbar from "../components/Navbar";
import Add from "../components/Add";
import Library from "./Library";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [cars, setCars] = useState([]);
  const [addedCars, setAddedCars] = useState([]);

  function addCars(carsObj) {
    setAddedCars([...addedCars, carsObj]);
  }

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

  const addCars = (car) => {
    setAddedCars([...addedCars, car]);
  };

  return (
    <div>
      <Navbar onSearch={handleSearch} />
      <Add addCars={addCars} />
      <Collection
        cars={filteredCars}
        addedCars={addedCars}
        onAddToLibrary={addCars}
      />
      {location.pathname === "/Library" && <Library cars={addedCars} />}
    </div>
  );
}

export default Home;