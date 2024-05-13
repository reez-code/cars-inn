import React from 'react';
import { NavLink } from 'react-router-dom';
import logoImage from '../images/logo-purple.png';
import SearchBar from './Search';
import { Link } from 'react-router-dom';


function Navbar({onSearch, addedCars}) {
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
          >
            Home
          </NavLink>

          <NavLink
            className="text-lg"
          >
            <Link to="/Library" state={addedCars}>Library</Link>
          </NavLink>
        </div>
        <div> <SearchBar onSearch={onSearch}/> </div>
      </div>
    </nav>
  );
}

export default Navbar;