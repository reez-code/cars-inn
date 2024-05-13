import { useState } from "react";

function AddedToLibrary({ id, image, description, title, onAddToLibrary }) {
  const [added, setAdded] = useState(false);

  return (
    <>
      <form>
        <div className="max-w-sm rounded overflow-hidden shadow-lg h-[500px]">
          <img className="w-full" src={image} alt={title} />
          <div className="px-6 pt-4">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-700 text-base">{description}</p>
          </div>
        </div>
      </form>
    </>
  );
}

export default AddedToLibrary;
