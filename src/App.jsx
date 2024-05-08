import { useEffect, useState } from "react";
import Collection from "./components/Collection";

function App() {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/cars")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);
  console.log(cars);
  return <Collection cars={cars} />;
}

export default App;
