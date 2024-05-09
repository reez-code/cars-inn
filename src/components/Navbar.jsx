import React from 'react';
import { NavLink } from 'react-router-dom';
import logoImage from '../images/logo-purple.png';
import SearchBar from './Search';


function Navbar({cars, searchTerm, setSearchTerm}) {
  return (
    <nav>
      <div className="flex justify-between items-center bg-neutral-500 text-white p-4">
        <img
          src={logoImage}
          alt="Logo"
          className="w-17 h-12"
        />

        <div className="flex space-x-4">
          <NavLink
            to="/Home"
            className="text-lg"
            activeClassName="text-purple-500"
          >
            Home
          </NavLink>

          <NavLink
            to="/Library"
            className="text-lg"
            activeClassName="text-purple-500"
          >
            Library
          </NavLink>
        </div>
        <div> <SearchBar cars={cars} searchTerm={searchTerm} setSearchTerm={setSearchTerm} /> </div>
      </div>
    </nav>
  );
}

export default Navbar;