import { useEffect, useState } from "react";
import Collection from "./components/Collection";
import Navbar from "./components/Navbar";


function App() {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/cars")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);
  console.log(cars);
  return( 
    <div>
      <Navbar/>
      <Collection cars={cars} />;
    </div>
  
)
}

export default App;