// Library.jsx
import React, { useEffect, useState } from "react";
import CarLibrary from "../components/CarLibrary";

function Library() {
  const [myLibrary, setMyLibrary] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/cars", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setMyLibrary(data))
      .catch((error) => console.error("Error fetching cars:", error));
  }, []);

  function onAddToLibrary(newCar) {
    setMyLibrary([...myLibrary, newCar]);
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold my-8">My Library</h1>
      <CarLibrary cars={myLibrary} onAddToLibrary={onAddToLibrary}/>
    </div>
  );
}

export default Library;