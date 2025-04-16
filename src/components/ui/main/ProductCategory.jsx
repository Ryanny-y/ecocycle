import ProductCard from "./ProductCard";

const ProductCategory = ({ title, bgColor, items }) => {
  return (
    <div className="flex flex-col bg-[#ebebeb] w-[80%] h-auto border border-[#4a814e] rounded-lg shadow-lg">
      <div className={`p-4 rounded-t-lg text-white ${bgColor}`}>
        <h1 className="text-xl font-bold sm:text-3xl md:text-4xl lg:text-3xl text-center">{title}</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full h-full p-5 place-items-stretch">
        {items.map((item) => (
          <ProductCard key={item._id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default ProductCategory;
