import { useEffect, useState } from "react";
import Collection from "../components/Collection";
import Navbar from "../components/Navbar";


function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/cars",{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
      }
			})
      .then((res) => res.json())
      .then((data) => setCars(data))
      .catch((error) => console.error("Error fetching cars:", error));
  }, [])

  const handleSearch =(term) => {
    setSearchTerm(term)
  }

  const filteredCars = cars.filter((car) => {
    return car.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      <Navbar onSearch={handleSearch}/>
      <Collection cars={filteredCars} />
    </div>
  )
}

export default Home