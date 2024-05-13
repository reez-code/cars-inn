import React from 'react';
import { NavLink } from 'react-router-dom';
import logoImage from '../images/logo-purple.png';
import SearchBar from './Search';


function Navbar({onSearch}) {
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

        </div>
        <div> <SearchBar onSearch={onSearch}/> </div>
      </div>
    </nav>
  );
}

export default Navbar;