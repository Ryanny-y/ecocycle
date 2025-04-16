import { useContext } from "react";
import ProductCategory from "../../components/ui/main/ProductCategory";
import useScrollTop from "../../utils/hooks/useScrollTop";
import { ProductContext } from '../../utils/contexts/ProductProvider';

const MainEcoswap = () => {

  useScrollTop();

  const { products } = useContext(ProductContext)
  
  const agriCultureProducts = products.filter(product => product.category === 'agriculture');
  const nonAgriCultureProducts = products.filter(product => product.category === 'non_agriculture');

  return (
    <main className="flex flex-col w-full">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center w-full h-full mt-3 mb-3">
          <img
            src="/logos/ecoswap.png"
            alt="eco-swap background"
            className="h-auto w-40"
          />
          <p className="text-center text-[#4a814e] text-md px-2.5 sm:text-xl md:text-2xl lg:text-2xl">
            One person's past is another's future.
          </p>
        </div>

        <div className="flex flex-col items-center md:items-start justify-center w-full md:flex-row gap-10 mb-3">
          <ProductCategory
            title="Agriculture"
            bgColor="bg-[#4a814e]"
            items={agriCultureProducts}
          />
          <ProductCategory
            title="Non-agriculture"
            bgColor="bg-[#695223]"
            items={nonAgriCultureProducts}
          />
        </div>
      </div>
    </main>
  );
};

export default MainEcoswap;
