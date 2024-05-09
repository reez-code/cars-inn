import { useEffect, useState } from "react";
import Collection from "../components/Collection";
import Navbar from "../components/Navbar";
import Add from "../components/Add";

function Home() {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/cars")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);
  console.log(cars);
  function addCars(carsObj) {
    setCars([...cars, carsObj]);
  }
  return (
    <div>
      <Navbar />
      <Add addCars={addCars} />
      <Collection cars={cars} />;
    </div>
  );
}

export default Home;
