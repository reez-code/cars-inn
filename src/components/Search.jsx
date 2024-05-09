import React, { useEffect, useState } from 'react';
import searchIcon from '../images/search-b.png';

function SearchBar() {
  const [cars, setCars] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/cars')
     .then((response) => response.json())
     .then((data) => setCars(data))
     .catch((error) => { console.error('Error in fetching data' , error)})
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredCars = cars.filter((car) => {
    return car.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <div>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search"
          className="px-2 py-1 text-sm text-gray-700"
          value={searchTerm}
          onChange={handleSearch}
        />

        <img
          src={searchIcon}
          alt="Search-icon"
          className="w-6 h-6 ml-2"
        />
      </div>

    </div>
  )
}

export default SearchBar;