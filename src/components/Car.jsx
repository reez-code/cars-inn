function Car({ id, image, description, title, onAddToLibrary }) {
  const handleClick = () => {
    onAddToLibrary({ id, image, title, description });
  };

  return (
    <>
      <form>
        <div className="max-w-sm rounded overflow-hidden shadow-lg h-[500px]">
          <img className="w-full" src={image} alt={title} />
          <div className="px-6 pt-4">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-gray-700 text-base">{description}</p>
          </div>
          <div className="pl-6 pt-4 pb-2">
            <button
              className={`py-2 px-4 rounded ${
                added ? "bg-green-500" : "bg-blue-500"
              } hover:bg-blue-700 text-white font-bold`}
              type="button"
              onClick={handleClick}
            >
              {added ? "Added to Library" : "Add to Library"}
            </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Car;
