import { NavLink } from 'react-router-dom';
import img1 from '../images/logo-green.png';
import img2 from '../images/logo-purple.png';
import img3 from '../images/search-b.png';
import img4 from '../images/search-w.png';
import img5 from '../images/night.png';
import img6 from '../images/sun.png';


function Navbar() {
  return (
    <nav>
      <div className="flex justify-between items-center bg-neutral-500 text-white p-4">
      <img src={img1} alt="Logo" className="w-17 h-12" />
        <NavLink to='/' className="text-lg">Home</NavLink>
        <NavLink to='/Library' className="text-lg">Library</NavLink>

        <div>
          <input type="text" placeholder='Search' />
          <img src={img4} alt="" className="w-8 h-8" />
        </div>

        <img src={img6} alt="" className="w-8 h-8"  />
        
      </div>
    </nav>
  );
}

export default Navbar;
