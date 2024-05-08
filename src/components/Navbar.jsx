
import { NavLink } from 'react-router-dom';

function Navbar () {
   return(
    <nav>
        <div className="flex justify-between items-center bg-neutral-500 text-white p-4">
        <NavLink to='/' className="text-lg" >Home</NavLink>
        <NavLink to='/Library' className="text-lg" >Library</NavLink>
        <NavLink to='/AddCar' className="text-lg" >Add Car</NavLink>
       </div>
    </nav>
    
   )
}

export default Navbar