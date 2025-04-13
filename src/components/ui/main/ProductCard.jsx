
const ProductCard = ({ image, name, description, required_points }) => {

  const url = import.meta.env.VITE_API_URL;
  return (
    <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg text-[#4a814e] gap-y-2">
      <img src={`${url}/images/${image}`} alt={name} className="h-24 w-24" />

      <div className="flex flex-col grow">
        <p className="text-center text-lg font-bold sm:text-2xl md:text-1xl lg:text-2xl">{name}</p>
        <p className="text-center text-sm md:text-base xl:text-lg tracking-tight text-black">{description}</p>
        <p className="text-center font-bold sm:text-2xl md:text-1xl lg:text-2xl mt-auto">{required_points} Points</p>
      </div>
    </div>
  );
};

export default ProductCard;
