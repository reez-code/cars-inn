import { useEffect, useState } from "react";
import Collection from "./components/Collection";
import Navbar from "./Components/Navbar";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/cars")
      .then((res) => res.json())
      .then((data) => setCars(data))
      .catch((error) => console.error("Error fetching cars:", error));
  }, []);

  const filteredCars = cars.filter((car) => {
    return car.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ul>
        {filteredCars.map((car) => (
          <li key={car.id} >
            {car.title}
          </li>
        ))}
      </ul>
      <Collection cars={filteredCars} />
    </div>
  );
}

export default App;