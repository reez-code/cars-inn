import { useEffect, useState } from "react";

function App() {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/cars")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);
  console.log(cars);
  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
}

export default App;
