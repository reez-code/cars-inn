import {useState} from "react";
import CarLibrary from "../components/CarLibrary";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";

function Library() {
  const location = useLocation();
  console.log(location);
  console.log(location.state);

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredCars = location.state.filter((car) => {
    return car.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div className="container mx-auto">
      <Navbar onSearch={handleSearch} />
      <h1 className="text-3xl font-bold my-8">My Library</h1>
      <CarLibrary cars={filteredCars} />
    </div>
  );
}

export default Library;
