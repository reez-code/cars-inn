import React, {useState } from 'react';
import searchIcon from '../images/search-b.png';

function SearchBar({onSearch}) {
  
  const [searchTerm, setSearchTerm] = useState('');
 
  const handleSearch = (e) => {
    e.preventDefault()
    onSearch(searchTerm)
    setSearchTerm(e.target.value);
  };

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